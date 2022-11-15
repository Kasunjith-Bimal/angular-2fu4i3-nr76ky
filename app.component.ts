import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
} from '@syncfusion/ej2-angular-pdfviewer';

/**
 * Default PdfViewer Controller
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:max-line-length
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
  ],
})
export class AppComponent {
  public service: string =
    'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
  public document: string = 'PDF_Succinctly.pdf';
  ngOnInit(): void {
    // ngOnInit function
  }
  globalChange() {
    var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < viewer.annotationCollection.length; i++) {
      viewer.freeTextSettings.annotationSelectorSettings = {
        resizerFillColor: 'yellow',
        resizerBorderColor: 'pink',
        resizerSize: 20,
        selectionBorderColor: 'gray',
        selectionBorderThickness: 10,
      };
      viewer.annotationCollection[i].fillColor = 'black';
      viewer.annotationCollection[i].fontColor = 'gold';
      viewer.annotationCollection[i].fontSize = 20;
      viewer.annotationCollection[i].strokeColor = 'green';
      viewer.annotationCollection[i].thickness = 5;
      viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
    }
  }
  specificChange() {
    var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < viewer.annotationCollection.length; i++) {
      if (viewer.annotationCollection[i].notes == 'Yes') {
        viewer.annotationCollection[i].fillColor = 'black';
        viewer.annotationCollection[i].fontColor = 'gold';
        viewer.annotationCollection[i].fontSize = 20;
        viewer.annotationCollection[i].strokeColor = 'green';
        viewer.annotationCollection[i].thickness = 5;
        viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
      }
    }
  }

  addFormFields() {
    var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    let textSettings = {
      tooltip: 'Type Here',
      backgroundColor: 'rgba(255, 0, 0,0.5)',
      alignment: 'Left',
      color: 'red',
      thickness: 3,
      fontSize: 20,
      borderColor: 'red',
      fontStyle: 1,
    };

    viewer.textFieldSettings = textSettings;

    viewer.formDesignerModule.setFormFieldMode('Textbox');
  }
}
