export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType('MY-COMPONENT', {
    model: {
      defaults: {
        // Default props
      },
    },
    view: {},
  });

  /*  const linkType = domc.getType('default');
  const model = linkType.model;
  const view = linkType.view;
  domc.addType('chaitnya', {
    model: model.extend({
      defaults: {
        ...model.prototype.defaults,
        tagName: 'a',
        resizable: 1,
        editable: 1,
        droppable: 1,
        traits: [
          {
            type: 'text',
            name: 'test',
            label: 'Text',
          },
          ...model.prototype.defaults.traits,
        ],
      },

      isComponent: function (el) {
        if (el.tagName == 'A') {
          return { type: 'chaitnya' };
        }
      },
    }),
    view: view,
  }); */
};
