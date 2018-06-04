<template>
  <div class="position-relative" :class="{'floating-field': floating}">
    <label :for="name" :class="labelClasses" class="form-control-placeholder" v-if="!floating">{{untranslated ? label : $t(this.label)}}</label>
    <input
      autocomplete="off"
      v-bind="elementBind"
      @input="$emit('input', $event.target.value)"
      @keyup="keyupping"
      v-validate="rules">
      <div class="f-border"></div>
      <label :for="name" :class="labelClasses" class="form-control-placeholder" v-if="floating">{{untranslated ? label : $t(this.label)}}</label>
      <div class="invalid-tooltip d-block" v-if="errors.has(name)">
        <i class="fa fa-warning"></i> {{errors.first(name)}}
      </div>
      <template v-else-if="serverErrors && serverErrors.hasOwnProperty(name)">
        <div class="invalid-tooltip d-block"
          v-for="(error, i) in serverErrors[name]" :key="i">
            <i class="fa fa-warning"></i>{{error}}
        </div>
      </template>
  </div>
</template>
<script>
// import bus from '@/buses/VeeBus'
import $ from 'jquery'
export default {
  name: 'VuInput',
  inject: ['$validator'],
  props: {
    type: {
      default: 'text'
    },
    lg: Boolean,
    sm: Boolean,
    plainText: Boolean,
    readonly: Boolean,
    SrOnly: Boolean,
    id: String,
    name: {
      type: String,
      required: true
    },
    label: String,
    rules: {
      default: 'required'
    },
    value: {},
    floating: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: null
    },
    untranslated: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    setPlaceholder () {
      return this.floating ? '' : (this.$t(this.placeholder) || (this.untranslated ? this.label : this.$t(this.label)))
    },
    fieldId () {
      return this.id || this.name
    },
    serverErrors () {
      return this.$store.state.serverErrors
    },
    classes () {
      return {
        [`form-control-${this.lg ? 'lg' : 'sm'}`]: this.lg || this.sm,
        [`form-control${this.plainText ? '-plaintext' : ''}`]: true
      }
    },
    labelClasses () {
      return {
        'sr-only': this.SrOnly
      }
    },
    elementBind () {
      return {
        type: this.type,
        name: this.name,
        'data-vv-as': this.untranslated ? this.label : this.$t(this.label),
        'class': this.classes,
        readonly: this.readonly,
        placeholder: this.setPlaceholder,
        id: this.fieldId,
        value: this.value
      }
    }
  },
  mounted () {
    $('.floating-field').find('.form-control').each(function () {
      if ($(this).val()) {
        $(this).addClass('not-null')
      }
    })
    $('.floating-field').find('input').on('focusout', function () {
      if ($(this).val()) {
        $(this).addClass('not-null')
      } else {
        $(this).removeClass('not-null')
      }
    })
  },
  methods: {
    keyupping (e) {
      // bus.$emit('inputChanged', this.name)
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss">
.floating-field {
  &.form-control {
    background-color: transparent
  }
  label {
    position: absolute;
    bottom: 0;
    font-size: 1.3rem;
    margin-right: 16px;
    transition: all 0.3s ease-in-out;
    color: var(--gray)
  }
  .form-control {
    background-color: transparent;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    &:focus,
    &:active {
      border-bottom: 1px solid #ccc;
      box-shadow: none;
    }
    & + .f-border {
      position: absolute;
      right: 50%;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary);
      transition: all 0.5s ease-in-out;
    }
    &:focus, &.not-null {
      & + .f-border {
        right: 0;
        width: 100%;
      }
      & ~ label {
        bottom:  35px;
        font-size: 80%;
        color: var(--dark)
      }
    }
  }
}
</style>
