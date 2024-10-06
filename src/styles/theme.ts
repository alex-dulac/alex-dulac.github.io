import 'styled-components';

export const defaultTheme = {
	white: '#fff',
	blue: '#3294F8',
	'base-title': '#E7EDF4',
	'base-subtitle': '#C4D4E3',
	'base-text': '#AFC2D4',
	'base-span': '#7B96B2',
	'base-label': '#3A536B',
	'base-border': '#1C2F41',
	'base-post': '#112131',
	'base-profile': '#0B1B2B',
	'base-background': '#071422',
	'base-input': '#040F1A',

	'panel-background': '#FDF6F6',
	'navy-text': '#043b59',

	// old
	//'primary': '#DCE1DE',
	//'secondary': '#9CC5A1',
	//'tertiary': '#49A078',
	//'text': '#1F2421',

	'tertiary': '#4E8098',
	'secondary': '#9CC5A1',
	'primary': '#90C2E7',
	'text': '#1F2421',


} as const;

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType { }
}
