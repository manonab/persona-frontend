export const login = async (email: string, password: string): Promise<{ token: string; user: any }> => {
	const response = await fetch('/api/auth/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	});

	if (!response.ok) {
		throw new Error('Échec de la connexion');
	}

	return response.json();
};

export const signup = async (name: string, email: string, password: string): Promise<{ user: any }> => {
	const response = await fetch('/api/auth/signup', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name, email, password }),
	});

	if (!response.ok) {
		throw new Error('Échec de l’inscription');
	}

	return response.json();
};
