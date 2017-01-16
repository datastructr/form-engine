{
  "title": "Contact Information", // name of form | String | Required
  "version": "1.0.0", // version of this form | String | Encouraged
  "style-definition": { 
    // classNames for form components | Object | Encouraged | default: see style.css
    // form, fieldset,label, input, help-text, 
    "form": "style-form-class",
    "fieldset": "style-fieldset-class",
    "label": "style-label-class",
    "input": "style-input-class",
    "help-text": "style-help-class"
  },
  "form-body": {
    // how the form is structured | Object | Required
    "paginated": true,  // paginate sections | Boolean | Encouraged | default: false
    "pagination-definition": [[1,2,3],[4,5],[6,7,8]], // defines how form sections should be paginated | Array[Array] | Required if Pagination True (otherwise everything rendered on one page)
    "sections": [
      // the actual structure | Array | Required
      // is array, each object represents a "section container", sections are objects which
      // compose a form section i.e. contact.basic-info, contact.detailed-info, contact.notes
      // keys play an integral part for advanced functionality
      // keys can be thought of as sub keys of the form i.e. contact -> basic info == 1.1
      {
        "key": 1, // Section key | Int | Required unique
        "title": "Basic Information", // title of section | String | Encouraged | default: none
        "paginated": false, // paginate this section (sub pagination of form) | Boolean 
        "pagination-definition": [[1],[2,3,4]], // defines how the section's fields should be paginated | Array[Array] | Required if Pagination True (otherwise everything rendered on one page)
        "fields-sections": [
          // the actual fields | Array | Required
          // fields are contained in their own object
          //  keys can be thought of as sub keys of the section i.e. contact -> basic info -> name == 1.1.1
          {
            "key": 1, // field key | Int | Required Unique
            "title": "Full Name", // title (also used as label) | String | Required
            "type": "input", // type of field (input, select, yes-no, date)
            "rules": ["required"], // rules applied to field (see docs for types of rules) | Array | default: []  
            "conditions": {
              // describe if a field should be filled out | Object | default:none
              // two keys, notif and if, basic conditional meaning | Array 
              "notif": [], // use keys for conditions rules (see below example)
              "if": []
            }
          },
          {
            "key": 2,
            "title": "Have you met this person?",
            "type": "yes-no",
            "rules": ["required"]
          },
          {
            "key": 3, 
            "title": "Meeting Data", 
            "type": "date", 
            "required": true,
            "rules": ["required", "no-future-date"],
            "conditions": {
              "if": ["1.1.2"] // EXAMPLE Condition - this field renders if the 1.1.2 === yes/true
            }
          },
          {
            // ... another field here
          }
        ] 
      },
      {
        // ... another sections here
      },
      {
        // ... another sections here
      }
      
    ] 
  }

