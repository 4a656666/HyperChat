(function() {
  if ("__addLocaleData" in Intl.ListFormat) {
      Intl.ListFormat.__addLocaleData({
          locale: "en-US",
          data: {
              formats: {
                  conjunction: {
                      'long': {
                          Pair: '{0} and {1}',
                          Start: '{0}, {1}',
                          Middle: '{0}, {1}',
                          End: '{0}, and {1}'
                      },
                      'short': {
                          Pair: '{0} & {1}',
                          Start: '{0}, {1}',
                          Middle: '{0}, {1}',
                          End: '{0}, & {1}'
                      },
                      narrow: {
                          Pair: '{0}, {1}',
                          Start: '{0}, {1}',
                          Middle: '{0}, {1}',
                          End: '{0}, {1}'
                      }
                  },
                  disjunction: {
                      'long': {
                          Pair: '{0} or {1}',
                          Start: '{0}, {1}',
                          Middle: '{0}, {1}',
                          End: '{0}, or {1}'
                      },
                      'short': {
                          Pair: '{0} or {1}',
                          Start: '{0}, {1}',
                          Middle: '{0}, {1}',
                          End: '{0}, or {1}'
                      },
                      narrow: {
                          Pair: '{0} or {1}',
                          Start: '{0}, {1}',
                          Middle: '{0}, {1}',
                          End: '{0}, or {1}'
                      }
                  },
                  unit: {
                      'long': {
                          Pair: '{0}, {1}',
                          Start: '{0}, {1}',
                          Middle: '{0}, {1}',
                          End: '{0}, {1}'
                      },
                      'short': {
                          Pair: '{0}, {1}',
                          Start: '{0}, {1}',
                          Middle: '{0}, {1}',
                          End: '{0}, {1}'
                      },
                      narrow: {
                          Pair: '{0} {1}',
                          Start: '{0} {1}',
                          Middle: '{0} {1}',
                          End: '{0} {1}'
                      }
                  }
              }
          }
      });
  }
})();
export default null;
