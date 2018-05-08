<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12">
                    <h2>title</h2> = {{ title}} <br><br>
                    <h2>description</h2> = {{description}}
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            description: ''
        }
    },
    created() {

    }
}
</script>

<style>

</style>
