import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// ==========================================
// SCHEMA DE VALIDACIÓN SERVER-SIDE
// ==========================================
const contactSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  email: z.string().email().max(150).toLowerCase().trim(),
  phone: z.string().min(8).max(20).regex(/^[\d\s\+\-\(\)]+$/).trim(),
  message: z.string().min(10).max(2000).trim(),
});

// ==========================================
// POST /api/contact
// ==========================================
export async function POST(request: NextRequest) {
  try {
    // 1. Parsear body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: 'Cuerpo de la solicitud inválido.' },
        { status: 400 }
      );
    }

    // 2. Validar con Zod
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: 'Datos inválidos. Revise los campos del formulario.',
          errors: fieldErrors,
        },
        { status: 422 }
      );
    }

    const data = parsed.data;

    // 3. Enviar a Strapi
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    const strapiToken = process.env.STRAPI_API_TOKEN;

    const strapiRes = await fetch(`${strapiUrl}/api/contact-messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(strapiToken ? { Authorization: `Bearer ${strapiToken}` } : {}),
      },
      body: JSON.stringify({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          status: 'new',
        },
      }),
    });

    if (!strapiRes.ok) {
      const errBody = await strapiRes.json().catch(() => ({}));
      console.error('[Contact API] Strapi error:', errBody);
      return NextResponse.json(
        {
          success: false,
          message: 'Error al registrar el mensaje. Por favor llámenos directamente.',
        },
        { status: 502 }
      );
    }

    const result = await strapiRes.json();
    console.log('[Contact API] Message saved, ID:', result?.data?.id);

    return NextResponse.json(
      {
        success: true,
        message: 'Mensaje enviado correctamente. Le responderemos a la brevedad.',
        id: result?.data?.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[Contact API] Unexpected error:', error);
    return NextResponse.json(
      { success: false, message: 'Error interno del servidor. Intente nuevamente más tarde.' },
      { status: 500 }
    );
  }
}

// Solo permitir POST
export async function GET() {
  return NextResponse.json({ message: 'Método no permitido' }, { status: 405 });
}
