export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add('MY-BLOCK', {
    label: 'My block',
    content: { type: 'MY-COMPONENT' },
    // media: '<svg>...</svg>',
  });

  bm.add('section', {
    label: '<b>Section</b>',
    attributes: { class: 'gjs-block-section' },
    content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
  });

  bm.add('text', {
    label: '<b>Text</b>',
    //select: true,
    content: {
      tagName: 'div',
      //draggable: false,
      attributes: { 'some-attribute': 'some-value' },
      components: [
        {
          tagName: 'span',
          content: '<b>Some static content</b>',
        },
        {
          tagName: 'div',
          // use `content` for static strings, `components` string will be parsed
          // and transformed in Components
          components: '<span>HTML at some point</span>',
        },
      ],
    },
  });
};
