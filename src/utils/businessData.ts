export const removeDuplicates = (array: any[], testProperty?: string) => {
  // Remove duplicate objects in an array of objects
  if (testProperty) {    
    return array?.filter(
      (item: any, index: any, self: any) =>
        index === self.findIndex((t: any) => t[testProperty] === item[testProperty])
    );
  }
  // Remove duplicate strings in an array of strings
  return [...new Set(array)];
};

// Merges the array of sub arrays into one array
export const mergeArrays = (arrayOfArrays: []) =>
  [].concat.apply([], arrayOfArrays);

export const createArrayOfCategories = (categoriesArray: [], categoriesObjects: any[]) => {
  categoriesArray?.forEach((cat: any) => {
    switch (cat.category1) {
      case "business":
        categoriesObjects.push({
          category1: cat.category1,
          category: "Business Services",
        });
        break;
      case "design":
        categoriesObjects.push({
          category1: cat.category1,
          category: "Design Services",
        });
        break;
      case "education":
        categoriesObjects.push({
          category1: cat.category1,
          category: "Education Services",
        });
        break;
      case "finance":
        categoriesObjects.push({
          category1: cat.category1,
          category: "Finance Services",
        });
        break;
      case "it":
        categoriesObjects.push({
          category1: cat.category1,
          category: "IT Services",
        });
        break;
      case "legal":
        categoriesObjects.push({
          category1: cat.category1,
          category: "Legal Services",
        });
        break;
      case "manufacturing":
        categoriesObjects.push({
          category1: cat.category1,
          category: "Manufacturing",
        });
        break;
      case "marketing":
        categoriesObjects.push({
          category1: cat.category1,
          category: "Marketing",
        });
        break;

      default:
        break;
    }
    return cat.category1;
  });
  return categoriesObjects;
};

export const createArrayOfSubCategories = (
  subCategoriesArray: [],
  subCategoriesObjects: any[]
) => {
  subCategoriesArray.forEach((sub: any) => {
    switch (sub.sub_category) {
      case "accounting":
        subCategoriesObjects.push({
          sub_category: "Bookkeeping/Accounting",
          key: sub.sub_category,
        });
        break;
      case "brokering":
        subCategoriesObjects.push({
          sub_category: "Business Brokering",
          key: sub.sub_category,
        });
        break;
      case "businessdevelopment":
        subCategoriesObjects.push({
          sub_category: "Business Development",
          key: sub.sub_category,
        });
        break;
      case "businessmanager":
        subCategoriesObjects.push({
          sub_category: "Business Manager",
          key: sub.sub_category,
        });
        break;
      case "interim":
        subCategoriesObjects.push({
          sub_category: "Interim Management",
          key: sub.sub_category,
        });
        break;
      case "intpartner":
        subCategoriesObjects.push({
          sub_category: "International Partner",
          key: sub.sub_category,
        });
        break;
      case "jointventures":
        subCategoriesObjects.push({
          sub_category: "Joint Ventures",
          key: sub.sub_category,
        });
        break;
      case "procurement":
        subCategoriesObjects.push({
          sub_category: "Procurement",
          key: sub.sub_category,
        });
        break;
      case "projectmanagement":
        subCategoriesObjects.push({
          sub_category: "Project Management",
          key: sub.sub_category,
        });
        break;
      case "3dprinting":
        subCategoriesObjects.push({
          sub_category: "3D Printing",
          key: sub.sub_category,
        });
        break;
      case "interiordesign":
        subCategoriesObjects.push({
          sub_category: "Interior Design/Architectural",
          key: sub.sub_category,
        });
        break;
      case "onlineeducation":
        subCategoriesObjects.push({
          sub_category: "On-line Education",
          key: sub.sub_category,
        });
        break;
      case "schooldev":
        subCategoriesObjects.push({
          sub_category: "School Development",
          key: sub.sub_category,
        });
        break;
      case "bond":
        subCategoriesObjects.push({
          sub_category: "Bond Market Finance",
          key: sub.sub_category,
        });
        break;
      case "grant":
        subCategoriesObjects.push({
          sub_category: "Grant Funding (EU & UK)",
          key: sub.sub_category,
        });
        break;
      case "fund":
        subCategoriesObjects.push({
          sub_category: "Fund Management",
          key: sub.sub_category,
        });
        break;
      case "investment":
        subCategoriesObjects.push({
          sub_category: "Investment Services",
          key: sub.sub_category,
        });
        break;
      case "property":
        subCategoriesObjects.push({
          sub_category: "Property Investment",
          key: sub.sub_category,
        });
        break;
      case "tax":
        subCategoriesObjects.push({
          sub_category: "Tax Advisory",
          key: sub.sub_category,
        });
        break;
      case "mergers":
        subCategoriesObjects.push({
          sub_category: "Mergers & Acquisition",
          key: sub.sub_category,
        });
        break;
      case "webapp":
        subCategoriesObjects.push({
          sub_category: "App & Web Design",
          key: sub.sub_category,
        });
        break;
      case "engineering":
        subCategoriesObjects.push({
          sub_category: "Enterprise Engineering",
          key: sub.sub_category,
        });
        break;
      case "lifi":
        subCategoriesObjects.push({
          sub_category: "LI-fi Development",
          key: sub.sub_category,
        });
        break;
      case "corporate":
        subCategoriesObjects.push({
          sub_category: "Corporate/Commercial",
          key: sub.sub_category,
        });
        break;
      case "estate":
        subCategoriesObjects.push({
          sub_category: "Estate Planning",
          key: sub.sub_category,
        });
        break;
      case "additive":
        subCategoriesObjects.push({
          sub_category: "Additive Manufacturing",
          key: sub.sub_category,
        });
        break;
      case "brand":
        subCategoriesObjects.push({
          sub_category: "Brand & Co ID Design",
          key: sub.sub_category,
        });
        break;
      case "strategy":
        subCategoriesObjects.push({
          sub_category: "Strategy",
          key: sub.sub_category,
        });
        break;
      case "socialmedia":
        subCategoriesObjects.push({
          sub_category: "Social Media Content",
          key: sub.sub_category,
        });
        break;

      default:
        break;
    }
  });
  return subCategoriesObjects;
};

export const structureCategories = (categories: any, subCategories: any) => {
  let arrCategories: any;
  let objCategories: any[] = [];
  let arrSubCategories: any;
  let objSubCategories: object[] = [];

  arrCategories = mergeArrays(categories);

  // Create a structured array of category names and their keys identifiers
  objCategories = createArrayOfCategories(arrCategories, objCategories);

  // Remove duplicates
  objCategories = removeDuplicates(objCategories, "category")

  arrSubCategories = mergeArrays(subCategories);
  arrSubCategories = arrSubCategories?.filter(
      (s: any) => s && typeof s.sub_category === "string"
  );

  // Create a structured array of sub category names and their keys identifiers
  arrSubCategories = createArrayOfSubCategories(
      arrSubCategories,
      objSubCategories
  );

  return {
      objCategories,
      arrSubCategories
  }

}
