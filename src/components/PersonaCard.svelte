<script>
	export let title;
	export let description;
</script>

<div class="p-6 border rounded-md shadow-sm hover:shadow-lg transition-shadow">
	<h2 class="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
	<p class="text-sm text-gray-600 mb-4">{description}</p>
	<button
		class="text-blue-500 hover:text-blue-600 font-medium"
	>
		Voir plus
	</button>
</div>