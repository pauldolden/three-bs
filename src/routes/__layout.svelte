<script>
  import Header from '$lib/components/Header.svelte';

  let contact = [
    { name: 'phone', link: '/svg/phone.svg' },
    { name: 'email', link: '/svg/email.svg' },
    { name: 'facebook', link: '/svg/facebook.svg' }
  ];

  import '../app.css';
</script>

<div
  class="bg-gradient-to-b from-primary-light to-primary-dark-30 min-h-screen min-w-screen flex flex-col font-poppins"
>
  <Header />
  <main class="flex flex-col flex-1">
    <div class="container mx-auto grid grid-cols-2 flex-1">
      <section class="flex flex-col justify-center">
        <div class="px-20">
          <img src="/images/Logo.png" alt="Three Bs Logo" />
          <p class="pt-4">
            Lorum ipsum dolor sit amet , consectetur adipiscing elit. Aliquam elementum consequat
            enim
          </p>
          <div class="pt-8 flex gap-3">
            <p>Get in touch:</p>
            <div class="flex gap-3">
              {#each contact as contactLink}
                <img src={contactLink.link} alt={contactLink.name} />
              {/each}
            </div>
          </div>
        </div>
      </section>
      <section class="flex flex-col justify-center">
        <div class="px-20">
          <slot />
        </div>
      </section>
    </div>
  </main>
</div>
