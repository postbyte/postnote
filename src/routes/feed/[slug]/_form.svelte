<script>
  let quillEditor;
  let password = "";
  export let post;
  export let isEditMode = false;
  export let isCreateMode = false;
  import { onMount } from "svelte";
  onMount(async () => {
    if (isEditMode || isCreateMode) {
      import("quill/dist/quill.snow.css");
      const quillModule = await import("quill/dist/quill");
      const Quill = quillModule.default;
      //console.log(quillModule);
      quillEditor = new Quill("#editor-container", {
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"]
          ]
        },
        placeholder: "",
        theme: "snow" // or 'bubble'
      });
    }
  });
  const saveChanges = async function() {
    let response = await fetch(`/feed/${post.slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: quillEditor.root.innerHTML,
        title: post.title,
        password: password
      })
    });
    let jsonResult = await response.json();
    alert(jsonResult.state);
  };
  const createPost = async function() {
    let response = await fetch(`/feed/${post.slug}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: post.title,
        slug: post.slug,
        content: quillEditor.root.innerHTML,
        password: password
      })
    });
    let jsonResult = await response.json();
    alert(jsonResult.state);
  };
</script>

<style>

</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>
{#if isEditMode || isCreateMode}
  <label>Title:</label>
  <input type="text" bind:value={post.title} />
{:else}
  <h1>{post.title}</h1>
{/if}
{#if isCreateMode}
  Slug:
  <input type="text" bind:value={post.slug} />
{/if}
<div class="content" id="editor-container">
  {@html post.html}
</div>
{#if isEditMode || isCreateMode}
  Password:
  <input type="password" bind:value={password} />
  <br />
{/if}
{#if isEditMode}
  <button on:click={saveChanges}>Save</button>
{/if}
{#if isCreateMode}
  <button on:click={createPost}>Create</button>
{/if}
