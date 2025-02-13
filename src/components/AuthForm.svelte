<script>
	import axios from 'axios';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	import logo from '../assets/logo-prismui.png';

	const API_BASE_URL = import.meta.env.VITE_BASE_URL;

	const handleSubmit = async () => {
		try {
			const response = await axios.post(`${API_BASE_URL}auth/login/`, {
				email: email,
				password: password,
			});
			if (response.status === 201) {
				goto('/dashboard');
			}
		} catch (err) {
			console.log(err);
		}
	};
</script>

<div class="size-full flex items-center justify-center bg-gray-50 text-black p-4">
	<div class="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 w-1/3">
		<img src={logo} alt="PrismUI Logo" class="mx-auto w-32 h-32 mb-6 rounded-full shadow-lg" />

		<h2 class="text-xl font-sans mb-6 text-gray-700 text-center">Connectez-vous</h2>

		<form class="space-y-5" on:submit={handleSubmit}>
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

			<button
				type="submit"
				class="w-full hover:cursor-pointer py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-600 transition-all"
			>
				Connexion
			</button>
		</form>

		<p class="text-gray-500 mt-6 text-center">
			Pas de compte ?
			<a href="/signup" class="text-blue-600 underline">
				Inscrivez-vous
			</a>
		</p>
	</div>
</div>
