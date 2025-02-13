<script>
	import DashboardHeader from '../../components/DashboardHeader.svelte';
	import SidebarMenu from '../../components/SidebarMenu.svelte';
	import MainContent from '../../components/MainContent.svelte';
</script>

<div class="flex flex-row min-h-screen">
	<SidebarMenu />
	<div class="flex-grow">
		<DashboardHeader />
		<MainContent />
	</div>
</div>
