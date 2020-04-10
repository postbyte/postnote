<script>
  import PostView from "./feed/[slug]/_form.svelte";
  export let post = { html: "", title: "", slug: "" };
</script>

<h1>New</h1>
<PostView {post} isCreateMode={true} />
