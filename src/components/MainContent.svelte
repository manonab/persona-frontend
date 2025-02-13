<script>
	import PersonaCard from './PersonaCard.svelte';
	const cards = [
		{ title: 'Personas', description: 'Gérez vos personas ici', onAction: () => console.log('Voir personas') },
		{ title: 'Tests UX', description: 'Lancez et suivez des tests', onAction: () => console.log('Voir tests UX') },
		{
			title: 'Résultats',
			description: 'Consultez les résultats détaillés',
			onAction: () => console.log('Voir résultats')
		},
		{
			title: 'Accessibilité',
			description: 'Vérifiez les critères d’accessibilité',
			onAction: () => console.log('Voir accessibilité')
		}
	];
</script>
<main class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
	{#each cards as card, index}
		<PersonaCard key={index} card={card} />
	{/each}
</main>
<main class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
	{#each cards as card, index}
		<PersonaCard
			title={card.title}
			description={card.description}
			onAction={card.onAction}
		/>
	{/each}
</main>