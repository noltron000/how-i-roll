import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import App from './jsx/app.jsx'

afterEach(cleanup)

it('renders the home page', () => {
	window.history.replaceState({}, '', import.meta.env.BASE_URL)
	render(<App />)

	expect(screen.getByRole('heading', { name: 'How I Roll' })).toBeTruthy()
})
