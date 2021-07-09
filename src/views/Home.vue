<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12">
        <div>
          <span class="text-center">
            <v-sheet class="py-2" color="primary">
              <v-btn small depressed color="milk" @click="reset()"
                >Reset
              </v-btn>
              <span>
                <span class="text-center black--text pa-2">Play to</span>

                <v-btn
                  class="ma-1"
                  small
                  depressed
                  color="thai"
                  :disabled="playTo == 21"
                  @click="playTo = 21"
                  >21</v-btn
                >

                <v-btn
                  class="ma-1"
                  small
                  depressed
                  color="thai"
                  :disabled="playTo == 11"
                  @click="playTo = 11"
                  >11</v-btn
                >

                <span class="text-center black--text">Serves</span>

                <v-btn
                  class="ma-1"
                  small
                  depressed
                  color="thai"
                  :disabled="numberOfServe == 2"
                  @click="numberOfServe = 2"
                  >2</v-btn
                >

                <v-btn
                  class="ma-1"
                  small
                  depressed
                  color="thai"
                  :disabled="numberOfServe == 5"
                  @click="numberOfServe = 5"
                  >5</v-btn
                >
              </span>
            </v-sheet>
          </span>
        </div>
      </v-col>
      <!-- LEFT CARD  -->
      <!-- <========= -->
      <v-col cols="6">
        <v-card :color="leftColor" height="100%" @click="addPoint('left')">
          <v-card-title class="text-capitalize titleBar py-10">
            <span>
              {{ leftColor }}
            </span>
            <v-spacer />
            <span v-if="leftServing">
              <v-icon x-large color="black"> mdi-table-tennis </v-icon>
            </span>
            <span v-else>
              <v-icon x-large :color="leftColor"> mdi-table-tennis </v-icon>
            </span>
          </v-card-title>
          <!-- <v-card-text class="text-center"> -->
          <v-container fluid>
            <div class="text-center bigText my-0 py-0">
              <span>
                {{ leftCount }}<span class="deuce">{{ deuceLeft }} </span></span
              >
            </div>
          </v-container>
          <!-- </v-card-text> -->
          <!--Left Actions -->
          <v-card-actions>
            <v-btn
              x-large
              dark
              :color="leftColor + colorAdjust"
              class="pa-16"
              depressed
              @click.stop="leftCount--"
            >
              Remove 1
            </v-btn>
            <v-spacer />
            <v-btn
              x-large
              dark
              :color="leftColor + colorAdjust"
              class="pa-16"
              depressed
              @click.stop="setServe('left')"
            >
              Set Serve
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- Middle Options -->

      <!-- Right Card -->
      <!-- ============> -->
      <v-col cols="6">
        <v-card :color="rightColor" height="100%" @click="addPoint('right')">
          <v-card-title class="text-capitalize titleBar py-10">
            <span>
              {{ rightColor }}
            </span>
            <v-spacer />
            <span v-if="!leftServing">
              <v-icon x-large color="black"> mdi-table-tennis </v-icon>
            </span>
            <span v-else>
              <v-icon x-large :color="rightColor"> mdi-table-tennis </v-icon>
            </span>
          </v-card-title>
          <v-container fluid>
            <div class="text-center bigText my-0 py-0">
              <span>
                {{ rightCount }}
                <span class="deuce">{{ deuceRight }} </span></span
              >
            </div>
          </v-container>
          <!--Right Actions -->
          <v-card-actions>
            <v-btn
              x-large
              dark
              :color="rightColor + colorAdjust"
              class="pa-16"
              depressed
              @click.stop="setServe('right')"
            >
              Set Serve
            </v-btn>
            <v-spacer />
            <v-btn
              x-large
              dark
              :color="rightColor + colorAdjust"
              class="pa-16"
              depressed
              @click.stop="rightCount--"
            >
              Remove 1
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- <span>
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
  </span> -->
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  data() {
    return {
      leftCount: 0,
      rightCount: 0,
      leftColor: 'matcha',
      rightColor: 'taro',
      colorAdjust: ' darken-3',
      currentServer: 'newLeft',
      numberOfServe: 2,
      serveCount: 0,
      leftServing: true,
      playTo: 11,
      isDeuce: true,
    }
  },
  computed: {
    ...mapState('app', ['appTitle']),
    // leftServing() {
    //   if (this.currentServer === 'newLeft') {
    //     return true
    //   }
    //   if (this.currentServer === 'newRight') {
    //     return false
    //   }
    //   return true
    // },

    deuceLeft() {
      if (this.leftCount < this.playTo - 1) {
        return ''
      }
      if (this.leftCount === this.rightCount) {
        return 'Deuce'
      }
      if (this.leftCount === this.rightCount + 1) {
        return 'Adv.'
      }
      return ''
    },
    deuceRight() {
      if (this.leftCount < this.playTo - 1) {
        return ''
      }
      if (this.leftCount === this.rightCount) {
        return 'Deuce'
      }
      if (this.leftCount + 1 === this.rightCount) {
        return 'Adv.'
      }
      return ''
    },
  },

  methods: {
    reset() {
      this.leftCount = 0
      this.rightCount = 0
    },
    setServe(who) {
      this.leftServing = who === 'left'
      this.serveCount = 0
    },
    addPoint(who) {
      if (who === 'left') {
        this.leftCount += 1
      } else if (who === 'right') {
        this.rightCount += 1
      }

      this.serveCount += 1

      if (this.serveCount === this.numberOfServe) {
        this.leftServing = !this.leftServing
        this.serveCount = 0
      }
    },
  },

  head() {
    return {
      title: {
        inner: 'Home',
      },
      meta: [
        {
          name: 'description',
          content: `Score app!`,
          id: 'desc',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.bigButton {
  padding: 100px;
}
.titleBar {
  font-size: 350%;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.bigText {
  font-size: 1500%;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
.deuce {
  font-size: 35%;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
</style>
