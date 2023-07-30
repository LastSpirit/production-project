import { Project } from "ts-morph";
import path from "path";

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, "..", "..", "src", "shared", "ui");
const sharedUIDirectory = project.getDirectory(uiPath);
const componentsDirs = sharedUIDirectory?.getDirectories();

function isAbsolute(value: string) {
  const layers = ["app", "shared", "entities", "features", "widgets", "pages"];
  return layers.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    const valueWithourAlias = value.replace("@/", "");

    const seqments = valueWithourAlias.split("/");

    const isSharedLayed = seqments?.[0] === "shared";
    const isUiSlice = seqments?.[1] === "ui";

    if (isAbsolute(valueWithourAlias) && isSharedLayed && isUiSlice) {
      const result = valueWithourAlias.split("/").slice(0, 3).join("/");
      importDeclaration.setModuleSpecifier(`@/${result}`);
    }
  });
});

componentsDirs?.forEach((directory) => {
  const indexFilePath = `${directory.getPath()}/index.ts`;
  const indexFile = directory.getSourceFile(indexFilePath);

  if (!indexFile) {
    const sourceCode = `export * from "./${directory.getBaseName()}";`;
    const file = directory.createSourceFile(indexFilePath, sourceCode, {
      overwrite: true,
    });

    file.save();
  }
});

project.save();
