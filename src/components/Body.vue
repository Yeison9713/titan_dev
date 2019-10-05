<template>
  <div style="margin: 25px; background: #fff;">
    <b-row>
      <b-col>
        <h2>Example heading <b-badge>New</b-badge></h2>
        <b-badge variant="primary">Primary</b-badge>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card bg-variant="light">
          <b-form inline>
            <b-col>
              <label class="sr-only" for="inline-form-input-name">Name</label>
              <b-input
                id="inline-form-input-name"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Jane Doe"
              ></b-input>
            </b-col>

            <b-col>
              <label class="sr-only" for="inline-form-input-username">Username</label>
              <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input id="inline-form-input-username" placeholder="Username"></b-input>
              </b-input-group>
            </b-col>
            <b-col>
              <b-button variant="primary">Save</b-button>
            </b-col>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>