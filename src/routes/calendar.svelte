<script context="module">
  import createClient from '$lib/prismic';
  export async function load({ fetch }) {
    const client = createClient({ fetch });

    const document = await client.getByUID('events', 'events');
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

  let calendarContainerWidth;

  console.log(calendarContainerWidth);
</script>

<h1>{data.title[0].text}</h1>
<div class="w-full" bind:clientWidth={calendarContainerWidth}>
  <iframe
    title="calendar"
    src={`https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FLondon&showTitle=1&showPrint=0&title=%20Three%20Bs%20&hl=en_GB&showCalendars=0&showTz=0&src=YnJvb21maWVsZGJhYnliZXJlYXZlbWVudEBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679`}
    style="border-width:0"
    width={calendarContainerWidth}
    height="600"
    frameborder="0"
    scrolling="no"
  />
</div>
