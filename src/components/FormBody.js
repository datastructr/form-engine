import React, { Component, PropTypes } from 'react';

import FormBodyPage from './FormBodyPage';

export default class FormBody extends Component {
  constructor(props) {
    super(props);

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);

    this.state = {
      page: 0
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  _deriveSectionPages(pageDefintions, sections) {
    let pages = [];

    pageDefintions.map(def => {
      let p = []
      def.map(secIndex => {
        p.push(sections.get(secIndex))
      })
      pages.push(p);
    })
    
    return pages;
  }

  render() {
    let {
      template,
      styles
    } = this.props;
    
    let paginated = template.get('paginated') || false;
    let pages;

    if(paginated) {
      pages = this._deriveSectionPages(template.get("pagination-definition"), template.get('sections'))
    } else {
      pages = [template.get('sections')];
    }

    console.log("HERE =---------------------------->>>>>>>>>>>>>>")
    console.log(pages)

    return (
      <div>
      {pages.map((page,i) => 
        <FormBodyPage
          key={i.toString()} 
          templates={page}
          pageNumber={i+1}
          currentView={this.state.page === i}
          previousPage={i!==pages.size && this.previousPage || null} 
          onSubmit={i!==pages.size && this.nextPage}
        />
      )}
      </div>
    );
  }
}

FormBody.propTypes = {
  template: PropTypes.object.isRequired,
  styles: PropTypes.object
}
