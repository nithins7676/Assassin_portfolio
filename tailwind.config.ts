
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				navy: {
					DEFAULT: '#1A1F2C',
					light: '#2A3142',
					dark: '#14171F'
				},
				gold: {
					DEFAULT: '#D4AF37',
					light: '#E9C767',
					dark: '#B3921F'
				},
				silver: {
					DEFAULT: '#9F9EA1',
					light: '#BFBEC1',
					dark: '#7F7E81'
				},
				charcoal: {
					DEFAULT: '#222222',
					light: '#333333',
					dark: '#111111'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"float": {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				"glow": {
					'0%, 100%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
					'50%': { boxShadow: '0 0 15px rgba(212, 175, 55, 0.8)' },
				},
				"drift": {
					'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
					'25%': { transform: 'translate(5px, 5px) rotate(1deg)' },
					'50%': { transform: 'translate(-5px, 10px) rotate(-1deg)' },
					'75%': { transform: 'translate(-10px, 5px) rotate(0deg)' },
					'100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
				},
				"fadeIn": {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"float": "float 6s ease-in-out infinite",
				"glow": "glow 3s ease-in-out infinite",
				"drift": "drift 20s ease-in-out infinite",
				"fadeIn": "fadeIn 1.5s ease-out"
			},
			backgroundImage: {
				'ancient-map': "url('/ancient-map-bg.jpg')"
			},
			fontFamily: {
				medieval: ['MedievalSharp', 'cursive'],
				inter: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
