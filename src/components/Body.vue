<template>
  <div>
    <div>
      <b-card bg-variant="light">
        <b-form-group
          id="fieldset-1"
          description="Let us know your name."
          label="Enter your name"
          label-for="input-1"
          :invalid-feedback="invalidFeedback"
          :valid-feedback="validFeedback"
          :state="state"
        >
          <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
        </b-form-group>
      </b-card>

      <b-card bg-variant="light">
        <b-form-group label-size="lg" label-class="font-weight-bold pt-0" class="mb-0">
          <b-form-group
            label-cols-sm="3"
            label="City:"
            label-align-sm="right"
            label-for="nested-city"
          >
            <b-form-input id="nested-city"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="State:"
            label-align-sm="right"
            label-for="nested-state"
          >
            <b-form-input id="nested-state"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Country:"
            label-align-sm="right"
            label-for="nested-country"
          >
            <b-form-input id="nested-country"></b-form-input>
          </b-form-group>

          <b-form-group label-cols-sm="3" label="Ship via:" label-align-sm="right" class="mb-0">
            <b-form-radio-group class="pt-2" :options="['Air', 'Courier', 'Mail']"></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-card>
    </div>
  </div>
</template>