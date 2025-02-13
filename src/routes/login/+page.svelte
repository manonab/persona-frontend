<script lang="ts">
	import AuthForm from '../../components/AuthForm.svelte';
	import { goto } from '$app/navigation';

	const handleLogin = () => {
		goto('/dashboard');
	};
</script>

<main class="min-h-screen flex items-center justify-center bg-gray-50">
	<AuthForm on:loginSuccess={handleLogin} />
</main>
