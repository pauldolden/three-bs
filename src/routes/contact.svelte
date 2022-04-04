<script context="module">
  import createClient from '$lib/prismic';
  export async function load({ fetch }) {
    const client = createClient({ fetch });

    const document = await client.getByUID('contact', 'contact');
    const { data } = document;

    return {
      props: {
        data
      }
    };
  }
</script>

<script lang="ts">
  import type { Homepage } from '$lib/types/Homepage';

  export let data: Homepage;

  console.log(data);
</script>

<h1>{data.title[0].text}</h1>
