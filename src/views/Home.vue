<template>
  <span>
    <v-card>
      <v-row no-gutters height="100%">
        <v-col cols="6">
          <v-btn height="600" width="600px" color="taro" @click="leftCount++">
            <h1 style="font-size: 450px;">{{ leftCount }}</h1>
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn
            height="600px"
            width="600px"
            color="matcha"
            @click="rightCount++"
          >
            <h1 style="font-size: 450px;">{{ rightCount }}</h1>
          </v-btn>
        </v-col>
      </v-row>

      <v-card-actions class="pa-0">
        <v-btn x-large class="px-16 py-12" color="taro" @click="leftCount--">
          remove 1
        </v-btn>
        <v-spacer />
        <v-btn x-large class="px-16 py-12" color="thai" @click="reset()">
          reset
        </v-btn>
        <v-spacer />
        <v-btn x-large class="px-16 py-12" color="matcha" @click="rightCount--">
          remove 1
        </v-btn>
      </v-card-actions>
    </v-card>
  </span>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  data() {
    return {
      leftCount: 0,
      rightCount: 0
    }
  },
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `Score app!`,
          id: 'desc'
        }
      ]
    }
  },

  computed: mapState('app', ['appTitle']),

  methods: {
    reset() {
      this.leftCount = 0
      this.rightCount = 0
    }
  }
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
