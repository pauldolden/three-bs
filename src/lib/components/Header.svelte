<script lang="ts">
  import { page } from '$app/stores';

  let navigation = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/about' },
    { label: 'Gallery', link: '/gallery' },
    { label: 'Calendar', link: '/calendar' },
    { label: 'Contact', link: '/contact' }
  ];
</script>

<header class="self-center flex flex-row items-center">
  <div class="container mx-auto py-10 flex flex-row justify-between">
    <div class="flex flex-row gap-5">
      {#each navigation as navItem}
        <a
          href={navItem.link}
          class:selected={navItem.link === $page.url.pathname}
          class="text-md hover:scale-110 transition border border-primary-dark w-[130px] h-[30px] rounded-full flex items-center justify-center hover:bg-primary-dark"
          >{navItem.label}</a
        >
      {/each}
    </div>
  </div>
</header>

<style>
  .selected {
    background-color: #ffcb00;
  }
</style>
