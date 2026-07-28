module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/frontend/src/components/ui/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "Card",
    ()=>Card,
    "SectionTitle",
    ()=>SectionTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
const buttonStyles = {
    base: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        fontWeight: 600,
        borderRadius: 'var(--radius-full)',
        cursor: 'pointer',
        transition: 'var(--transition)',
        border: '2px solid transparent',
        textDecoration: 'none',
        fontFamily: 'var(--font-body)',
        letterSpacing: '0.01em'
    }
};
function Button({ href, onClick, variant = 'primary', size = 'md', children, disabled, loading, type = 'button', fullWidth, style }) {
    const sizeMap = {
        sm: {
            padding: '0.4rem 1rem',
            fontSize: '0.85rem'
        },
        md: {
            padding: '0.65rem 1.5rem',
            fontSize: '0.95rem'
        },
        lg: {
            padding: '0.85rem 2rem',
            fontSize: '1rem'
        }
    };
    const variantMap = {
        primary: {
            background: 'var(--color-primary)',
            color: 'var(--color-white)',
            boxShadow: 'var(--shadow-blue)'
        },
        secondary: {
            background: 'var(--color-secondary)',
            color: 'var(--color-white)'
        },
        outline: {
            background: 'transparent',
            color: 'var(--color-primary)',
            borderColor: 'var(--color-primary)'
        },
        ghost: {
            background: 'transparent',
            color: 'var(--color-primary)'
        }
    };
    const computedStyle = {
        ...buttonStyles.base,
        ...sizeMap[size],
        ...variantMap[variant],
        width: fullWidth ? '100%' : undefined,
        opacity: disabled || loading ? 0.7 : 1,
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        ...style
    };
    const content = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: '1em',
                    height: '1em',
                    border: '2px solid currentColor',
                    borderTopColor: 'transparent',
                    borderRadius: '50%',
                    display: 'inline-block',
                    animation: 'spin 0.7s linear infinite'
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/ui/index.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            "Procesando..."
        ]
    }, void 0, true) : children;
    if (href && !disabled) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            style: computedStyle,
            children: content
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/ui/index.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        disabled: disabled || loading,
        style: computedStyle,
        children: [
            content,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes spin { to { transform: rotate(360deg); } }`
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/ui/index.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/ui/index.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
function SectionTitle({ tag, title, subtitle, centered = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: centered ? 'center' : 'left',
            marginBottom: '2.5rem'
        },
        children: [
            tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    background: 'var(--color-primary-light)',
                    color: 'var(--color-primary)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem'
                },
                children: tag
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/ui/index.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    marginBottom: subtitle ? '0.75rem' : 0,
                    color: 'var(--color-gray-900)'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/ui/index.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: '1.05rem',
                    color: 'var(--color-gray-500)',
                    maxWidth: '600px',
                    margin: centered ? '0 auto' : '0',
                    lineHeight: 1.7
                },
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/ui/index.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/ui/index.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
function Card({ children, hover = true, padding = '1.75rem', style }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: hover ? 'card-hover' : '',
        style: {
            background: 'var(--color-white)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-sm)',
            padding,
            border: '1px solid var(--color-gray-100)',
            transition: 'var(--transition-slow)',
            ...style
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .card-hover:hover {
          box-shadow: var(--shadow-lg) !important;
          transform: translateY(-3px);
          border-color: var(--color-primary-light) !important;
        }
      `
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/ui/index.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/ui/index.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/sections/ServicesSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesGrid",
    ()=>ServicesGrid,
    "ServicesPreview",
    ()=>ServicesPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-rsc] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/pill.js [app-rsc] (ecmascript) <export default as Pill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-rsc] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$heart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHeart$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/hand-heart.js [app-rsc] (ecmascript) <export default as HandHeart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/home.js [app-rsc] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$accessibility$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Accessibility$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/accessibility.js [app-rsc] (ecmascript) <export default as Accessibility>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-rsc] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/index.tsx [app-rsc] (ecmascript)");
;
;
;
;
const iconMap = {
    users: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
        size: 26
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    pill: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__["Pill"], {
        size: 26
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    stethoscope: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
        size: 26
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
        lineNumber: 11,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    handshake: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$heart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHeart$3e$__["HandHeart"], {
        size: 26
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
        lineNumber: 12,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    home: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
        size: 26
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    accessibility: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$accessibility$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Accessibility$3e$__["Accessibility"], {
        size: 26
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
        lineNumber: 14,
        columnNumber: 18
    }, ("TURBOPACK compile-time value", void 0)),
    bandage: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
        size: 26
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
        lineNumber: 15,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0))
};
function getIcon(iconName) {
    return iconMap[iconName || ''] || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
        size: 26
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
        lineNumber: 19,
        columnNumber: 37
    }, this);
}
function ServicesPreview({ services }) {
    const displayServices = services.slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section",
        id: "servicios-preview",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionTitle"], {
                        tag: "Nuestros servicios",
                        title: "Cuidado especializado en cada situación",
                        subtitle: "Ofrecemos una gama completa de servicios de enfermería domiciliaria adaptados a las necesidades de cada paciente y familia."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '1.5rem',
                            marginBottom: '2.5rem'
                        },
                        children: displayServices.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceCard, {
                                service: service
                            }, service.slug, false, {
                                fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/servicios",
                            style: {
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.7rem 1.75rem',
                                background: 'transparent',
                                color: 'var(--color-primary)',
                                border: '2px solid var(--color-primary)',
                                borderRadius: 'var(--radius-full)',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                transition: 'var(--transition)',
                                textDecoration: 'none'
                            },
                            className: "see-all-btn",
                            children: [
                                "Ver todos los servicios",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .see-all-btn:hover {
          background: var(--color-primary) !important;
          color: white !important;
        }
      `
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function ServicesGrid({ services }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1.5rem'
                },
                children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceCard, {
                        service: service,
                        detailed: true
                    }, service.slug, false, {
                        fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
                        lineNumber: 108,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
function ServiceCard({ service, detailed }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        style: {
            background: 'var(--color-white)',
            borderRadius: 'var(--radius-md)',
            padding: '1.75rem',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--color-gray-100)',
            transition: 'var(--transition-slow)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },
        className: "service-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '52px',
                    height: '52px',
                    background: 'var(--color-primary-light)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    marginBottom: '1.25rem',
                    transition: 'var(--transition)'
                },
                "aria-hidden": "true",
                className: "service-icon",
                children: getIcon(service.iconName)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    marginBottom: '0.75rem',
                    fontSize: '1.1rem'
                },
                children: service.title
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: '0.9rem',
                    color: 'var(--color-gray-500)',
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: '1.25rem'
                },
                children: detailed ? service.fullDescription || service.shortDescription : service.shortDescription
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: `/servicios/${service.slug}`,
                style: {
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    color: 'var(--color-primary)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'var(--transition)',
                    marginTop: 'auto'
                },
                className: "service-link",
                "aria-label": `Ver más sobre ${service.title}`,
                children: [
                    "Más información",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .service-card:hover {
          box-shadow: var(--shadow-lg) !important;
          transform: translateY(-4px);
          border-color: var(--color-primary-light) !important;
        }
        .service-card:hover .service-icon {
          background: var(--color-primary) !important;
          color: white !important;
        }
        .service-link:hover { gap: 0.6rem !important; }
      `
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/sections/ServicesSection.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/sections/CTASection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTASection",
    ()=>CTASection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/phone.js [app-rsc] (ecmascript) <export default as Phone>");
;
;
;
function CTASection({ title, text, phone }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section",
        style: {
            background: 'var(--color-off-white)'
        },
        id: "cta-final",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'clamp(2.5rem, 6vw, 4rem)',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": "true",
                            style: {
                                position: 'absolute',
                                top: '-30%',
                                right: '-10%',
                                width: '400px',
                                height: '400px',
                                background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
                                borderRadius: '50%'
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/sections/CTASection.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                zIndex: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        color: 'white',
                                        marginBottom: '1rem',
                                        fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)'
                                    },
                                    children: title || '¿Necesita cuidado para un ser querido?'
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/sections/CTASection.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: 'rgba(255,255,255,0.85)',
                                        fontSize: '1.05rem',
                                        lineHeight: 1.7,
                                        maxWidth: '560px',
                                        margin: '0 auto 2rem'
                                    },
                                    children: text || 'Contáctenos hoy y le responderemos en menos de 24 horas. Evaluamos su caso sin costo y le ofrecemos la mejor solución para su familia.'
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/sections/CTASection.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '1rem',
                                        justifyContent: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contacto",
                                            style: {
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                padding: '0.85rem 2rem',
                                                background: 'white',
                                                color: 'var(--color-primary)',
                                                borderRadius: 'var(--radius-full)',
                                                fontWeight: 700,
                                                fontSize: '1rem',
                                                textDecoration: 'none',
                                                transition: 'var(--transition)',
                                                boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
                                            },
                                            className: "cta-primary-btn",
                                            children: [
                                                "Solicitar información",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/sections/CTASection.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/sections/CTASection.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `tel:${phone.replace(/\s/g, '')}`,
                                            style: {
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                padding: '0.85rem 2rem',
                                                background: 'rgba(255,255,255,0.12)',
                                                color: 'white',
                                                border: '2px solid rgba(255,255,255,0.3)',
                                                borderRadius: 'var(--radius-full)',
                                                fontWeight: 600,
                                                fontSize: '1rem',
                                                textDecoration: 'none',
                                                transition: 'var(--transition)'
                                            },
                                            className: "cta-secondary-btn",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/sections/CTASection.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, this),
                                                phone
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/sections/CTASection.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/sections/CTASection.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/sections/CTASection.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/sections/CTASection.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/sections/CTASection.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .cta-primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2) !important;
        }
        .cta-secondary-btn:hover {
          background: rgba(255,255,255,0.2) !important;
          border-color: rgba(255,255,255,0.5) !important;
        }
      `
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/sections/CTASection.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/sections/CTASection.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/lib/strapi.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getConfiguracionSitio",
    ()=>getConfiguracionSitio,
    "getContactInfo",
    ()=>getContactInfo,
    "getHomePage",
    ()=>getHomePage,
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "getServices",
    ()=>getServices,
    "getTestimonials",
    ()=>getTestimonials,
    "getTrabajaConNosotros",
    ()=>getTrabajaConNosotros,
    "strapiGet",
    ()=>strapiGet,
    "strapiPost",
    ()=>strapiPost,
    "submitContactMessage",
    ()=>submitContactMessage
]);
// ==========================================
// UTILIDADES DE FETCH - STRAPI API
// ==========================================
const STRAPI_URL = ("TURBOPACK compile-time value", "http://localhost:1337") || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;
function buildQueryString(options) {
    const params = new URLSearchParams();
    if (options.populate) {
        if (typeof options.populate === 'string') {
            params.set('populate', options.populate);
        } else if (Array.isArray(options.populate)) {
            options.populate.forEach((p)=>params.append('populate[]', p));
        }
    }
    if (options.sort) {
        options.sort.forEach((s)=>params.append('sort[]', s));
    }
    if (options.filters) {
        Object.entries(options.filters).forEach(([key, value])=>{
            params.set(`filters[${key}][$eq]`, String(value));
        });
    }
    if (options.pagination) {
        if (options.pagination.page) params.set('pagination[page]', String(options.pagination.page));
        if (options.pagination.pageSize) params.set('pagination[pageSize]', String(options.pagination.pageSize));
    }
    return params.toString();
}
async function strapiGet(endpoint, options = {}) {
    const query = buildQueryString(options);
    const url = `${STRAPI_URL}/api/${endpoint}${query ? `?${query}` : ''}`;
    const headers = {
        'Content-Type': 'application/json'
    };
    if (STRAPI_TOKEN) {
        headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
    }
    const fetchOptions = {
        headers,
        cache: options.cache || 'no-store'
    };
    if (options.revalidate !== undefined) {
        fetchOptions.next = {
            revalidate: options.revalidate
        };
        delete fetchOptions.cache;
    }
    const res = await fetch(url, fetchOptions);
    if (!res.ok) {
        throw new Error(`Strapi fetch error: ${res.status} ${res.statusText} for ${url}`);
    }
    return res.json();
}
async function strapiPost(endpoint, data) {
    const url = `${STRAPI_URL}/api/${endpoint}`;
    const headers = {
        'Content-Type': 'application/json'
    };
    if (STRAPI_TOKEN) {
        headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
    }
    const res = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            data
        }),
        cache: 'no-store'
    });
    if (!res.ok) {
        const error = await res.json().catch(()=>({}));
        throw new Error(error?.error?.message || `Strapi POST error: ${res.status}`);
    }
    return res.json();
}
async function getHomePage() {
    try {
        const data = await strapiGet('home-page', {
            populate: [
                'benefits'
            ],
            revalidate: 60
        });
        return data?.data?.attributes ?? null;
    } catch (e) {
        console.error('Error fetching home page:', e);
        return null;
    }
}
async function getServices(featuredOnly = false) {
    try {
        const options = {
            sort: [
                'order:asc'
            ],
            revalidate: 60
        };
        if (featuredOnly) {
            options.filters = {
                featured: true
            };
        }
        const data = await strapiGet('services', options);
        return data?.data?.map((item)=>item.attributes) ?? [];
    } catch (e) {
        console.error('Error fetching services:', e);
        return [];
    }
}
async function getServiceBySlug(slug) {
    try {
        const data = await strapiGet('services', {
            filters: {
                slug
            },
            revalidate: 60
        });
        return data?.data?.[0]?.attributes ?? null;
    } catch (e) {
        console.error('Error fetching service:', e);
        return null;
    }
}
async function getTestimonials() {
    try {
        const data = await strapiGet('testimonials', {
            filters: {
                active: true
            },
            revalidate: 300
        });
        return data?.data?.map((item)=>item.attributes) ?? [];
    } catch (e) {
        console.error('Error fetching testimonials:', e);
        return [];
    }
}
async function getContactInfo() {
    try {
        const data = await strapiGet('contact-info', {
            revalidate: 300
        });
        return data?.data?.attributes ?? null;
    } catch (e) {
        console.error('Error fetching contact info:', e);
        return null;
    }
}
async function submitContactMessage(payload) {
    return strapiPost('contact-messages', payload);
}
async function getTrabajaConNosotros() {
    try {
        const data = await strapiGet('trabaja-con-nosotros', {
            revalidate: 300
        });
        return data?.data?.attributes ?? null;
    } catch (e) {
        console.error('Error fetching trabaja-con-nosotros:', e);
        return null;
    }
}
async function getConfiguracionSitio() {
    try {
        const data = await strapiGet('configuracion-sitio', {
            revalidate: 3600
        });
        return data?.data?.attributes ?? null;
    } catch (e) {
        console.error('Error fetching configuracion-sitio:', e);
        return null;
    }
}
}),
"[project]/frontend/src/lib/fallback-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ==========================================
// DATOS DE FALLBACK — Prosalud SpA
// Útil para desarrollo inicial o cuando Strapi no responde
// ==========================================
__turbopack_context__.s([
    "fallbackContactInfo",
    ()=>fallbackContactInfo,
    "fallbackHomePage",
    ()=>fallbackHomePage,
    "fallbackServices",
    ()=>fallbackServices,
    "fallbackTestimonials",
    ()=>fallbackTestimonials,
    "fallbackTrabajaConNosotros",
    ()=>fallbackTrabajaConNosotros
]);
const fallbackHomePage = {
    heroTitle: 'Cuidado de paciente en domicilio',
    heroSubtitle: 'Servicios de enfermería y cuidado domiciliario para adultos mayores y pacientes postoperatorios. Profesionales y personal certificado, atención personalizada y el acompañamiento que su familia necesita.',
    heroButtonText: 'Solicitar información',
    heroButtonLink: '/contacto',
    aboutTitle: 'Quiénes somos',
    aboutText: 'Somos un equipo de técnicos en enfermería y cuidadoras con capacitación y certificación, comprometidos con brindar atención domiciliaria de calidad humana y cercana. Contamos con 7 años de experiencia acompañando a personas y familias en sus procesos de cuidado, entregando apoyo profesional directamente en el hogar de nuestros pacientes.',
    benefits: [
        {
            id: 1,
            icon: 'heart',
            title: 'Atención humanizada',
            description: 'Tratamos a cada paciente con la calidez y respeto que se merece.'
        },
        {
            id: 2,
            icon: 'clock',
            title: 'Disponibilidad 24/7',
            description: 'Estamos disponibles cuando más nos necesita.'
        },
        {
            id: 3,
            icon: 'home',
            title: 'Cuidado en casa',
            description: 'El paciente se recupera mejor en su propio entorno y junto a su familia.'
        }
    ],
    finalCtaTitle: '¿Necesita cuidado para un ser querido?',
    finalCtaText: 'Contáctenos hoy y le responderemos a la brevedad. Evaluamos su caso y le ofrecemos la mejor solución para su familia.',
    seoTitle: 'Prosalud SpA | Enfermería y Cuidado Domiciliario',
    seoDescription: 'Servicios de enfermería y cuidado domiciliario para adultos mayores y pacientes postoperatorios. Personal certificado en Viña del Mar.'
};
const fallbackServices = [
    {
        title: 'Cuidado de paciente en domicilio',
        slug: 'cuidado-paciente-domicilio',
        shortDescription: 'Acompañamiento integral para pacientes en su hogar, con atención personalizada a sus necesidades físicas y emocionales.',
        fullDescription: 'Ofrecemos cuidado domiciliario personalizado para pacientes que requieren asistencia en su vida diaria. Nuestros profesionales brindan apoyo en actividades básicas, control de signos vitales, administración de medicamentos y compañía constante. Trabajamos en coordinación con la familia para asegurar el máximo bienestar del paciente.',
        iconName: 'users',
        featured: true,
        order: 1,
        seoTitle: 'Cuidado de Paciente en Domicilio — Prosalud SpA',
        seoDescription: 'Servicio profesional de cuidado domiciliario en Viña del Mar.'
    },
    {
        title: 'Toma de muestras sanguíneas',
        slug: 'toma-muestras-sanguineas',
        shortDescription: 'Extracción de muestras de sangre en la comodidad del hogar, con traslado al laboratorio correspondiente.',
        fullDescription: 'Realizamos la toma de muestras sanguíneas directamente en el domicilio del paciente, evitando el desplazamiento a centros de salud. Contamos con los materiales y protocolos adecuados para garantizar la calidad de la muestra y la seguridad del paciente.',
        iconName: 'stethoscope',
        featured: true,
        order: 2,
        seoTitle: 'Toma de Muestras Sanguíneas a Domicilio',
        seoDescription: 'Extracción de sangre en el hogar por técnicos certificados en Viña del Mar.'
    },
    {
        title: 'Curaciones simples y avanzadas',
        slug: 'curaciones-simples-avanzadas',
        shortDescription: 'Curación de heridas, manejo de úlceras y control de heridas quirúrgicas directamente en el domicilio.',
        fullDescription: 'Realizamos curaciones simples y avanzadas, manejo de úlceras por presión, control de heridas quirúrgicas y monitoreo de signos vitales. Nuestro equipo está capacitado para detectar complicaciones y coordinar oportunamente con el médico tratante.',
        iconName: 'bandage',
        featured: true,
        order: 3,
        seoTitle: 'Curaciones a Domicilio — Prosalud SpA',
        seoDescription: 'Curación de heridas simples y avanzadas por personal certificado.'
    },
    {
        title: 'Instalación de sonda vesical',
        slug: 'instalacion-sonda-vesical',
        shortDescription: 'Instalación y control de sonda vesical por personal certificado, con los protocolos de higiene y seguridad necesarios.',
        fullDescription: 'Nuestros técnicos en enfermería realizan la instalación, control y retiro de sondas vesicales en el domicilio del paciente, siguiendo estrictamente los protocolos de higiene y seguridad para minimizar el riesgo de infecciones.',
        iconName: 'pill',
        featured: false,
        order: 4,
        seoTitle: 'Instalación Sonda Vesical a Domicilio',
        seoDescription: 'Instalación de sonda vesical por técnicos certificados en Viña del Mar.'
    },
    {
        title: 'Instalación de sonda nasogástrica',
        slug: 'instalacion-sonda-nasogastrica',
        shortDescription: 'Instalación de sonda nasogástrica para alimentación enteral o aspiración gástrica, con seguimiento profesional.',
        fullDescription: 'Realizamos la instalación y control de sondas nasogástricas para pacientes que requieren alimentación enteral o aspiración gástrica. Brindamos capacitación a la familia para el manejo seguro en el hogar.',
        iconName: 'handshake',
        featured: false,
        order: 5,
        seoTitle: 'Instalación Sonda Nasogástrica a Domicilio',
        seoDescription: 'Sonda nasogástrica para alimentación enteral por personal certificado.'
    },
    {
        title: 'Postura de aros',
        slug: 'postura-de-aros',
        shortDescription: 'Instalación de aros o aretes con técnica aséptica para pacientes que requieren este procedimiento médico.',
        fullDescription: 'Realizamos la postura de aros con técnica aséptica y materiales esterilizados, siguiendo los protocolos médicos correspondientes para garantizar la seguridad y comodidad del paciente.',
        iconName: 'accessibility',
        featured: false,
        order: 6,
        seoTitle: 'Postura de Aros a Domicilio — Prosalud SpA',
        seoDescription: 'Postura de aros con técnica aséptica por técnicos certificados.'
    }
];
const fallbackTestimonials = [
    {
        name: 'María González',
        role: 'Hija de paciente',
        quote: 'El equipo de Prosalud SpA ha sido un apoyo incondicional para mi madre. Su profesionalismo y calidez nos dieron tranquilidad en un momento muy difícil. Los recomiendo con total confianza.',
        rating: 5,
        active: true
    },
    {
        name: 'Roberto Fernández',
        role: 'Paciente postoperatorio',
        quote: 'Mi recuperación fue mucho más rápida gracias al seguimiento diario que recibí. La técnico siempre estuvo atenta, puntual y muy bien preparada. Excelente servicio.',
        rating: 5,
        active: true
    },
    {
        name: 'Carmen Vidal',
        role: 'Familiar de adulto mayor',
        quote: 'Gracias a este servicio, mi padre puede vivir con dignidad en su hogar. El equipo es respetuoso, empático y muy competente. Es la mejor decisión que tomamos.',
        rating: 5,
        active: true
    }
];
const fallbackContactInfo = {
    email: 'procsalud49@gmail.com',
    phone: '+56 9 8363 2443',
    whatsapp: '+56 9 8363 2443',
    address: 'Calle Libertad 63, Oficina 401, Viña del Mar',
    businessHours: 'Atención 24/7',
    mapEmbedUrl: '',
    introText: 'Estamos disponibles las 24 horas para responder sus consultas y coordinar la atención que su familia necesita.'
};
const fallbackTrabajaConNosotros = {
    titulo: '¿Quieres formar parte de nuestro equipo?',
    descripcion: 'En Prosalud SpA creemos que el cuidado de calidad comienza con un equipo humano comprometido. Si eres Técnico en Enfermería (TENS), cuidador(a) certificado(a) o cuentas con experiencia en atención domiciliaria, te invitamos a formar parte de nuestro equipo. Buscamos personas responsables, empáticas y con vocación de servicio para brindar atención profesional y cercana a nuestros pacientes.',
    perfilesBuscados: 'Técnico en Enfermería (TENS)\nCuidador(a) certificado(a)\nPersonal con experiencia en atención domiciliaria',
    emailPostulacion: 'seleccion.prosalud@gmail.com',
    activo: true,
    seoTitle: 'Trabaja con Nosotros | Prosalud SpA',
    seoDescription: 'Únete al equipo de Prosalud SpA. Buscamos técnicos en enfermería y cuidadores certificados en Viña del Mar.'
};
}),
"[project]/frontend/src/app/servicios/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiciosPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$sections$2f$ServicesSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/sections/ServicesSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$sections$2f$CTASection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/sections/CTASection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$strapi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/strapi.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fallback$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/fallback-data.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: 'Servicios de Enfermería Domiciliaria',
    description: 'Conozca todos nuestros servicios: cuidado de adultos mayores, administración de medicamentos, curaciones, acompañamiento domiciliario, atención postoperatoria y más.',
    openGraph: {
        title: 'Servicios de Enfermería | CuidadoEnfermería',
        description: 'Servicios profesionales de enfermería domiciliaria.'
    }
};
async function ServiciosPage() {
    const services = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$strapi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServices"])();
    const displayServices = services.length > 0 ? services : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fallback$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackServices"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-off-white) 100%)',
                    paddingTop: 'calc(70px + 4rem)',
                    paddingBottom: '4rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionTitle"], {
                        tag: "Nuestros servicios",
                        title: "Cuidado profesional para cada necesidad",
                        subtitle: "Contamos con un equipo especializado para brindar atención integral en el hogar, adaptada a cada paciente y situación clínica."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/servicios/page.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/servicios/page.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/servicios/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$sections$2f$ServicesSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ServicesGrid"], {
                services: displayServices
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/servicios/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$sections$2f$CTASection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CTASection"], {
                title: "¿No encuentra lo que busca?",
                text: "Contáctenos directamente. Evaluamos su caso de forma personalizada y le ofrecemos la solución que mejor se adapte a sus necesidades."
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/servicios/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/frontend/src/app/servicios/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/src/app/servicios/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ne-7rn._.js.map