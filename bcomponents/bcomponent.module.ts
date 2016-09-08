import {NgModule} from '@angular/core';

import {AttributesModule} from './attributes.module';

import {AlertModule} from './alert/alert.module';
import {BadgeModule} from './badge/badge.module';
import {BlockquoteModule} from './blockquote/blockquote.module';
import {BreadcrumbModule} from './breadcrumb/breadcrumb.module';
import {ButtonModule} from './button/button.module';
import {ButtonGroupModule} from './button-group/button-group.module';
import {DropdownModule} from './dropdown/dropdown.module';
import {HeadingModule} from './heading/heading.module';
import {InputGroupModule} from './input-group/input-group.module';
import {JumbotronModule} from './jumbotron/jumbotron.module';
import {LabelModule} from './label/label.module';
import {LinkModule} from './link/link.module';
import {ListModule} from './list/list.module';
import {MediaModule} from './media/media.module';
import {ModalModule} from './modal/modal.module';
import {PanelModule} from './panel/panel.module';
import {ProgressbarModule} from './progressbar/progressbar.module';
import {SidenavModule} from './sidenav/sidenav.module';
import {TableModule} from './table/table.module';
import {ThumbnailModule} from './thumbnail/thumbnail.module';
import {WellModule} from './well/well.module';

var Modules: any[] = [
    AlertModule,
    BadgeModule,
    BlockquoteModule,
    BreadcrumbModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    HeadingModule,
    InputGroupModule,
    JumbotronModule,
    LabelModule,
    LinkModule,
    ListModule,
    MediaModule,
    ModalModule,
    PanelModule,
    ProgressbarModule,
    SidenavModule,
    TableModule,
    ThumbnailModule,
    WellModule
];

@NgModule({
    declarations: [],
    imports: [...Modules, AttributesModule],
    exports: [...Modules]
})
export class NgBComponentsModule {}