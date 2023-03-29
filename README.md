>What do y’all do to make inline anchors accessible in native? If you have an Anchor in a Paragraph, the anchor will not be reachable from a screen reader. I thought about making a special Paragraph component that keeps track of children anchors rendered in it and rendering VisuallyHidden Anchors below the Paragraph but I have found two issues: 1) VisuallyHidden changes where the content shows up in the flow for the screen reader and 2) You can’t seem to interact with anything inside a VisiallyHidden due to pointer-events: none 


https://user-images.githubusercontent.com/13814048/228687783-8e5ad7de-f00f-49d4-b6fc-e323b2731484.mov

