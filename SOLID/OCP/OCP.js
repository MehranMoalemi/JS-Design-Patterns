const Colors = Object.freeze({
    red: "red",
    green: "green",
    blue: "blue",
  });
  
  const Sizes = Object.freeze({
    small: "small",
    meduim: "meduim",
    large: "large",
  });
  
  class Product {
    constructor(name, color, size) {
      this.name = name;
      this.color = color;
      this.size = size;
    }
  }
  
  let apple = new Product("Apple", Colors.green, Sizes.small);
  let tree = new Product("Tree", Colors.green, Sizes.large);
  let house = new Product("House", Colors.blue, Sizes.large);
  
  let products = [apple, tree, house];
  
  class ColorSpecification {
    constructor(color) {
      this.color = color;
    }
    isSatisfied(item) {
      return item.color === this.color;
    }
  }
  
  class SizeSpecification {
    constructor(size) {
      this.size = size;
    }
    isSatisfied(item) {
      return item.size === this.size;
    }
  }
  
  class Filter {
    filter(items, spec) {
      return items.filter((item) => spec.isSatisfied(item));
    }
  }
  
  class AndSpecification {
    constructor(...specs) {
      this.specs = specs;
    }
    isSatisfied(item) {
      return this.specs.every((x) => x.isSatisfied(item));
    }
  }
  
  let specs = new AndSpecification(
    new ColorSpecification(Colors.green),
    new SizeSpecification(Sizes.large)
  );
  
  const newFilter = new Filter();
  
  for (let product of newFilter.filter(
    products,
    specs
  )) {
    console.log(`${product.name} is green and large`);
  }
  