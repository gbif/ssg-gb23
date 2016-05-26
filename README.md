# ssg-example
A sample project that makes use of the ssg repository tools to create a static site. The site works both as documentation and an example that we can use when creating new sites.

## custom templates

For creating an image that links to a download

```styledYaml
templates:
- path: pdfpreview_en.html
  pdf: "//api.gbif.org/v1/installation/location/IPT_INSTALLATION"
  img: "/images/program.jpg"
  description: Download pdf
```

action buttons
```styledYaml
templates:
- path: actions.html
  actions:
  - title: Financial support application form
    url: /raw/programme.pdf
    description: Download pdf
```

contacts
```styledYaml
templates:
- path: contact.html
  contacts:
  - name: Anne Mette Nielsen
    image: /images/amn.jpg
    mail: anmnielsen@gbif.org
    tel: +45 35 32 14 81
    info: Head of Administration
```

map
```styledYaml
templates:
- path: map_en.html
```
