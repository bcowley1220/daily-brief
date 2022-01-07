<script>
    import Header from "$lib/components/header.svelte"
</script>

  
<Header/>


<main>
    <slot/>
</main>

<style>
    * {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
:root {
  --offwhite: hsl(180deg 8% 97%);
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}

html {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

body {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
div#sidebar , main {
  height: 93%;
}

div#sidebar {
  width: 15%;
}

#mainWrapper {
  background: lightblue;
}

.sideBar {
  background: lightpink;
}
.inputWrapper {
  display: flex;
  flex-flow: column nowrap;
  margin: 1.5em 0;
}
.inputWrapper > label {
  margin-bottom: 0.5em;
}
.inputWrapper > input,
.inputWrapper > select {
  padding: 1em;
  border-radius: 4px;
  border: solid 1px #202020;
}

.businessTitle {
  font-family: 'Bitter', serif;
}
.active {
  width: 75% !important;
  height: 100% !important;
  display: flex !important;
}

</style>
