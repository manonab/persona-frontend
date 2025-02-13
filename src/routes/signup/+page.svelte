<script lang="ts">
	import SignupForm from '../../components/SignupForm.svelte';

	import { goto } from '$app/navigation';
	const handleSignup = () => {
		goto('/dashboard');
	};
</script>

<main class="min-h-screen flex items-center justify-center bg-gray-50">
	<SignupForm on:signupSuccess={handleSignup} />
</main>
