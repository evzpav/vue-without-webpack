const SearchForm = () => import('./SearchForm.js');

export default {
  name: `SearchForm`,
  components: {
    SearchForm,
  },
  data: () => ({
    results:"",
    numberOfAdults: 1,
    numberOfChildren: 0,
    startDate: new Date(),
    finishDate: new Date()
  }),
  methods: {
    search() {
      console.log(this.numberOfAdults)
      console.log(this.numberOfChildren)
      console.log(this.startDate)
      console.log(this.finishDate)

      axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then((response)=>{
          this.results = response.data;
        }).catch((error)=> {
          // handle error
          console.log(error);
        })
    }
  },
  template: `
  <div class="container">
   <div class="columns">
      <div class="column is-one-quarter">
          <b-field label="Start date">
              <b-datepicker v-model="startDate"
                  placeholder="Click to select..."
                  icon="calendar-today">
              </b-datepicker>
          </b-field>

          <b-field label="Finish date">
              <b-datepicker v-model="finishDate"
                  placeholder="Click to select..."
                  icon="calendar-today">
              </b-datepicker>
          </b-field>
      </div>

      <div class="column">
        <b-field label="Adults">
          <b-select placeholder="Number of adults" v-model="numberOfAdults">
              <option v-for="item in 10" :value="item">
                 {{item}}
              </option>
          </b-select>
         </b-field>

         <b-field label="Children">
         <b-select placeholder="Number of children" v-model="numberOfChildren">
         <option value="0">0</option>
             <option v-for="item in 10" :value="item">
                {{item}}
             </option>
         </b-select>
        </b-field>
       
      </div>
      
    </div>
    <div class="columns column"> 
      <b-button type="is-info" @click="search()">Submit</b-button>
      {{results}}
    </div>
  </div>

  `,
};
