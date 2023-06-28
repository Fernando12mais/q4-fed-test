var data = [];

var reportsWidget = {
  options: {
    containerSelector: ".reports",
    template: `{{#.}}
                <article>
                    <a href="{{cover}}" target="_blank">
                        <img  src="{{cover}}" alt="{{title}} Cover"/>
                    </a>
                    <footer >
                        {{#documents}}
                            <h3>
                                <a href="{{url}}" target="_blank">{{title}} 
                                <span>({{file_size}} {{file_type}})</span>
                                
                                </a>
                      
                            </h3>
                        {{/documents}} 
                    </footer>
                </article> 
            {{/.}}`,
  },

  init: function () {
    data = reportData.slice(0, 6);
    this.renderReports(data);
  },

  renderReports: function (reports) {
    var inst = this,
      options = inst.options;

    $(options.containerSelector).html(
      Mustache.render(options.template, reports)
    );
  },
};

reportsWidget.init();

const button = document.querySelector("#btn-load-reports");

button.addEventListener("click", loadMoreReports);

function loadMoreReports() {
  data = data.concat(reportData.slice(data.length - 1, 6));

  reportsWidget.renderReports(data);

  if (data.length == reportData.length) {
    button.style.display = "none";
  }
}
