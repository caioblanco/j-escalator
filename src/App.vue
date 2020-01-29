<template>
<div id="app"
     v-bind:class="{ fw: fw }">

  <b-container fluid
               class="text-center pt-5">

    <b-form-checkbox v-model="fw">
      Melhorado
    </b-form-checkbox>

  </b-container>

  <div class="top mt-5 text-center">
    <b-container class="mb-0">
      <h1 class="mb-0">
        we have ideas to<br />
        growth your business
      </h1>
      <b-button variant="light">SEE NOW</b-button>
    </b-container>
  </div>

  <b-container class="pb-5">

    <h2 class="mb-0 pt-5 mb-2">
      categories
    </h2>
    discover new possibilities to help you today

    <b-row class="mt-5">
      <b-col cols="4"
             class="z-thumb">
        <div class="categorie pt-4"
             style="background:url(https://i.imgur.com/fKRspOB.png) -61px -3px;width:371px">
          <h3>nature</h3>
          Lorem ipsum dolor sit amet
        </div>
      </b-col>
      <b-col cols="6"
             class="z-thumb">
        <div class="categorie pt-4"
             style="background:url(https://i.imgur.com/p7JeZjU.png) -22px -123px;width:770px">
          <h3>daily</h3>
          Praesent tincidunt consectetur diam
        </div>
      </b-col>
      <b-col cols="12"
             class="mt-4 z-thumb">
        <div class="categorie"
             style="background: url(https://i.imgur.com/m6ynJIp.png) -30px -110px / 1240px;padding-top:120px">
          <h3>together</h3>
          Vivamus non arcu tincidunt, tempus nunc eu, scelerisque ipsum
        </div>
      </b-col>
      <b-col cols="8"
             class="mt-4 text-right z-thumb"
             style="max-width:810px">
        <div class="categorie pt-4"
             style="background:url(https://i.imgur.com/SGreUMy.png) -13px -32px;width:770px">
          <h3>analysis</h3>
          Duis sollicitudin mauris vitae venenatis aliquet
        </div>
      </b-col>
      <b-col cols="2"
             align-self="end"
             class="mt-4 z-thumb">
        <div class="categorie pt-4"
             style="background:url(https://i.imgur.com/RQ20ah2.png) -113px -16px;width:371px">
          <h3>pictures</h3>
          Quisque eu nisl purus
        </div>
      </b-col>
    </b-row>

  </b-container>

  <div class="bot mt-5 pb-5">
    <b-container>
      <h2 class="mb-0 pt-5 mb-2">
        growth plans
      </h2>
      take your business to the next level

      <div class="graph pb-5">
        <b-row align-v="end">
          <b-col>
            <div class="g-col">
              <div class="g-title">
                <h4>$ 100</h4>
                100 + hours
              </div>
              <div class="g-body">
                <div class="g-text">
                  Lorem ipsum dolor sit<br />
                  amet, consectetur<br />
                  adipiscing elit.
                </div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="g-col">
              <div class="g-title">
                <h4>$ 150</h4>
                180 + hours
              </div>
              <div class="g-body"
                   style="height:145px">
                <div class="g-text">
                  Lorem ipsum dolor sit<br />
                  amet, consectetur<br />
                  adipiscing elit.
                </div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="g-col">
              <div class="g-title">
                <h4>$ 200</h4>
                260 + hours
              </div>
              <div class="g-body"
                   style="height:196px">
                <div class="g-text">
                  Lorem ipsum dolor sit<br />
                  amet, consectetur<br />
                  adipiscing elit.
                </div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="g-col">
              <div class="g-title">
                <h4>$ 250</h4>
                380 + hours
              </div>
              <div class="g-body"
                   style="height:247px">
                <div class="g-text">
                  Lorem ipsum dolor sit<br />
                  amet, consectetur<br />
                  adipiscing elit.
                </div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="g-col">
              <div class="g-title">
                <h4>$ 300</h4>
                420 + hours
              </div>
              <div class="g-body"
                   style="height:298px">
                <div class="g-text">
                  Lorem ipsum dolor sit<br />
                  amet, consectetur<br />
                  adipiscing elit.
                </div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="g-col">
              <div class="g-title">
                <h4>$ 350</h4>
                520 + hours
              </div>
              <div class="g-body"
                   style="height:349px">
                <div class="g-text">
                  Lorem ipsum dolor sit<br />
                  amet, consectetur<br />
                  adipiscing elit.
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>

</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      fw: false
    }
  }
}
</script>

<style>
</style>
