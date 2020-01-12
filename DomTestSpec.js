describe('DOM Testing for SEO Factors', function(){
    let Dom;
    beforeEach(function(){
      Dom = new DomManipulation();
    })
 
    it('Check for Title', function(){
      expect(Dom.init().title).not.toBe(null)
    })

    it('Check for Meta Keywords', function(){
      var meta = document.createElement('meta');
      meta.setAttribute('name', 'keywords');
      meta.content = "DOM testing, Jasmine, SEO";
      expect(Dom.init().meta).toEqual(meta)
    })

    it('Check for an Image', function(){
      expect(Dom.init().img).not.toBe(null)
    })
  
})