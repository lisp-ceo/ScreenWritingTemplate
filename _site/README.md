This is a template document for Document Types.

Document Types will be implemented with a semantic naming scheme similar to NPM.
Package information will be gleemed from package.json but will default back to
stylistic features of the repo.

Definitions

DocumentTypeName.html > Default template to render when a document of the
specfied type is requested. This template is called to render when this document
is requested

/DocumentTypeName
  /data
    DocumentTypeName.json // Specifies the data format of the data to go into
    the db.
  /templates
    DocumentTypeName.html
    DocumentTypeName.input.html
    DocumentTypeName.output.html
  /AnyUserDefinedFileTypeThatIsReferencedFromTheTemplates

All of the data is assumed to be strings.

DocumentTypes manage the posting and rendering of data / everything else is
handled
