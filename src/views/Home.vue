<template>
  <div>
    <!-- <h1 class="home-page-title">{{ appTitle }}</h1> -->
    <v-parallax
      height="700"
      src="https://images.unsplash.com/photo-1521342475957-8db764a86913?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80"
    >
      <div class="page-wrapper">
        <v-card color="taro" rounded="xl">
          <v-card-title>
            <h1>Café Boba</h1>
          </v-card-title>
        </v-card>
      </div>
    </v-parallax>

    <!-- About this Community -->
    <v-sheet color="matcha">
      <v-container class="text-center">
        <div class="my-8">
          <h2 class="display-2 font-weight-bold mb-3 text-center">
            A place to work, socialize, and learn
          </h2>
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  data() {
    return {}
  },
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `Fill out the Summer Survey please!`,
          id: 'desc'
        }
      ]
    }
  },
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.noCap {
  text-transform: none;
}
.page-wrapper {
  .infoMsg {
    text-align: 'justify';
    color: 'red';
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 3rem;
  }

  .home-page-title {
    text-align: center;
  }

  .documentation-link {
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #5d6788;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    text-decoration: none;
    width: fit-content;
    font-weight: 500;
  }
}
</style>
