import type { Attribute, Schema } from '@strapi/strapi';

export interface SharedBenefit extends Schema.Component {
  collectionName: 'components_shared_benefits';
  info: {
    description: 'Beneficio o diferencial de la empresa';
    displayName: 'Beneficio';
    icon: 'star';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    icon: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Attribute.DefaultTo<'heart'>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.benefit': SharedBenefit;
    }
  }
}
