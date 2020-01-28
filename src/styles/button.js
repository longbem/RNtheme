import * as Color from './color';
import * as Spacing from './spacing';
import * as Typography from './typography';

export const base = {
  padding: Spacing.mdeium,
  borderRadius: Spacing.small,
  alignItems: 'center',

  justifyContent: 'center',
};

export const text = {
  color: Color.white,
  fontSize: Spacing.extra_mdeium,
};

export const btnBackground = {
  backgroundColor: Color.border_button,
};

export const btnWith = {
  color: Color.text_title,
  fontSize: Spacing.extra_mdeium,
};
