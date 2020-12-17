import ContactForm from '../components/Contact/ContactForm';

export default {
  title: 'Components/ContactForm',
  component: ContactForm
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ContactForm },
  template: '<contact-form v-bind="$props" @editOneContactList="editOneContactList" @pushContact="pushContact"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  formContact:{
    _id:'',
    name: '',
    phone: '',
    state:false
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
    formContact:{
        _id:'332dfsfsr23',
        name: 'Luciano',
        phone: 'Capraro',
        state:false
      }
};

