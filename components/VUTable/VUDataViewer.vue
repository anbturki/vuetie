<template>
  <div class="vu-data-viewer">
    <vu-card>
      <vu-card-content>
        <div class="table-responsive position-relative">
          <div class="overlay-loading d-flex flex-column align-items-center justify-content-center" v-if="loading">
            <h3><i class="fa fa-spinner fa-spin"></i></h3>
            {{$t('please wait')}}
          </div>
          <table class="table table-striped table-bordered">
            <thead>
              <tr v-if="head">
                <th
                  v-for="(h, i) in head"
                  :key="i"
                  @click="sortTable(h.value)">
                  {{$t(h.title)}}
                </th>
                <h4 v-if="loading">Loading...</h4>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in data" :key="item[ItemKey]">
                <slot :item="item"></slot>
              </tr>
            </tbody>
          </table>
        </div>
        <nav aria-label="Page navigation" class="mt-2" v-if="isNext || isPrev">
          <ul class="pagination">
            <li class="page-item" :class="{disabled: !isPrev}">
              <a class="page-link" href="#" aria-label="Previous"  @click.prevent="changePage(currentPage - 1)">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item" v-for="i in numPages()" :key="i" :class="{active: i === currentPage}">
              <a class="page-link" href="#" @click.prevent="changePage(i)">{{i}}</a>
            </li>
            <li class="page-item" :class="{disabled: !isNext}">
              <a class="page-link" href="#" aria-label="Next" @click.prevent="changePage(currentPage + 1)">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </vu-card-content>
    </vu-card>
  </div>
</template>
<script>
export default {
  name: 'VuDataViewer',
  props: {
    head: Array,
    data: Array,
    ItemKey: {
      required: true
    },
    count: {
      type: Number
    },
    limit: {},
    next: {},
    prev: {}
  },
  data () {
    return {
      currentPage: 1,
      elementsPerPage: 3,
      ascending: false,
      sortColumn: ''
    }
  },
  computed: {
    isNext () {
      return this.next !== null
    },
    isPrev () {
      return this.prev !== null
    },
    loading () {
      return this.$store.state.loading
    }
  },
  mounted () {
    this.elementsPerPage = this.limit
  },
  methods: {
    sortTable (col) {
      if (this.sortColumn === col) {
        this.ascending = !this.ascending
      } else {
        this.ascending = true
        this.sortColumn = col
      }
      var ascending = this.ascending
      this.data.sort(function (a, b) {
        if (a[col] > b[col]) {
          return ascending ? 1 : -1
        } else if (a[col] < b[col]) {
          return ascending ? -1 : 1
        }
        return 0
      })
    },
    numPages () {
      return Math.ceil(this.count / this.elementsPerPage)
    },
    changePage (page) {
      this.currentPage = page
      let offset = (this.currentPage - 1) * this.elementsPerPage
      this.$emit('offset', offset)
    }
  }
}
</script>
<style scoped>
.overlay-loading {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #f9f9f9eb;
  z-index: 9
}
</style>
