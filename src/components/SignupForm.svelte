<script>
	import axios from 'axios';
	let name = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
	import logo from '../assets/logo-prismui.png';
	import { goto } from '$app/navigation';
	const API_BASE_URL = import.meta.env.VITE_BASE_URL;

	const handleSubmit = async () => {
		try {
			const response = await axios.post(`${API_BASE_URL}auth/signup/`, {
				email: email,
				name: name,
				password: password,
				role: "USER"
			});
			if (response.status === 201) {
				goto('/login');
			}
		} catch (err) {
			console.log(err);
		}
	};
</script>

<div class="size-full flex items-center justify-center bg-gray-50 text-black p-4">
	<div class="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 w-1/3">
		<img src={logo} alt="PrismUI Logo" class="mx-auto w-32 h-32 mb-6 rounded-full shadow-lg" />

		<h2 class="text-xl font-sans mb-6 text-gray-700 text-center">Créer un compte</h2>

		<form class="space-y-5" on:submit={handleSubmit}>
			<div>
				<input
					type="text"
					bind:value={name}
					placeholder="Nom"
					class="w-full text-sm px-4 py-2.5 border border-gray-200 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
					required
				/>
			</div>
			<div>
				<input
					type="email"
					bind:value={email}
					placeholder="Email"
					class="w-full text-sm px-4 py-2.5 border border-gray-200 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
					required
				/>
			</div>
			<div>
				<input
					type="password"
					bind:value={password}
					placeholder="Mot de passe"
					class="w-full text-sm px-4 py-2.5 border border-gray-200 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
					required
				/>
			</div>
			<div>
				<input
					type="password"
					bind:value={confirmPassword}
					placeholder="Confirmer le mot de passe"
					class="w-full text-sm font-sans px-4 py-2.5 border border-gray-200 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
					required
				/>
			</div>

			<button
				type="submit"
				class="w-full py-3 bg-gradient-to-r hover:cursor-pointer from-blue-400 to-blue-500 text-white rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-600 transition-all"
			>
				S'inscrire
			</button>
		</form>

		<p class="text-gray-500 mt-6 text-center">
			Déjà un compte ?
			<a href="/login" class="text-blue-600 underline">
				Connectez-vous
			</a>
		</p>
	</div>
</div>
