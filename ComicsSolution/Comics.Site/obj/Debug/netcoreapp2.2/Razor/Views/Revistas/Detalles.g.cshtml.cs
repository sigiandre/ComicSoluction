#pragma checksum "C:\Users\andre\OneDrive\Escritorio\Trabajo Web\ComicsSolution\Comics.Site\Views\Revistas\Detalles.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "8ec53bd4d7a1a9031cb8fd98e0a969108e2dbdf0"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Revistas_Detalles), @"mvc.1.0.view", @"/Views/Revistas/Detalles.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Revistas/Detalles.cshtml", typeof(AspNetCore.Views_Revistas_Detalles))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\andre\OneDrive\Escritorio\Trabajo Web\ComicsSolution\Comics.Site\Views\_ViewImports.cshtml"
using Comics.Site;

#line default
#line hidden
#line 2 "C:\Users\andre\OneDrive\Escritorio\Trabajo Web\ComicsSolution\Comics.Site\Views\_ViewImports.cshtml"
using Comics.Site.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"8ec53bd4d7a1a9031cb8fd98e0a969108e2dbdf0", @"/Views/Revistas/Detalles.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"bc1d59305e69e460dadb23c3a41345d45b98acd4", @"/Views/_ViewImports.cshtml")]
    public class Views_Revistas_Detalles : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Comics.Domain.Entities.Comic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "Index", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("btn btn-default btn-sm"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("control-label"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.LabelTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_LabelTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 2 "C:\Users\andre\OneDrive\Escritorio\Trabajo Web\ComicsSolution\Comics.Site\Views\Revistas\Detalles.cshtml"
  
    ViewData["Title"] = "Detalle de Revista";

#line default
#line hidden
            BeginContext(91, 763, true);
            WriteLiteral(@"<div id=""main_container"">
    <div class=""container ipage"">
        <div class=""row"">
            <!-- Start Loop Posts -->
            <div id=""inner-container"" class=""col-md-12 col-sm-12 col-xs-12 main-container"">
                <div class=""parallax-about"">
                    <div class=""vc_row wpb_row vc_row-fluid"">
                        <div class=""wpb_column vc_column_container vc_col-sm-12"">
                            <div class=""wpb_wrapper"">
                                <div class=""section-title center"">
                                    <h3 class=""bold text-uppercase"">Detalle del Comic</h3><div class=""hr""></div>
                                </div>
                                <p>
                                    ");
            EndContext();
            BeginContext(854, 79, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "8ec53bd4d7a1a9031cb8fd98e0a969108e2dbdf05428", async() => {
                BeginContext(907, 22, true);
                WriteLiteral("<< Regresar al listado");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Action = (string)__tagHelperAttribute_0.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(933, 405, true);
            WriteLiteral(@"
                                </p>
                                <hr />
                                <div class=""ts-blog blog_peronal_list bloglist-size1"">
                                    <div class=""row"">
                                        <div class=""col-md-4"">
                                            <div class=""form-group"">
                                                ");
            EndContext();
            BeginContext(1338, 50, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("label", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "8ec53bd4d7a1a9031cb8fd98e0a969108e2dbdf07310", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_LabelTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.LabelTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_LabelTagHelper);
#line 25 "C:\Users\andre\OneDrive\Escritorio\Trabajo Web\ComicsSolution\Comics.Site\Views\Revistas\Detalles.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_LabelTagHelper.For = ModelExpressionProvider.CreateModelExpression(ViewData, __model => __model.Id);

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-for", __Microsoft_AspNetCore_Mvc_TagHelpers_LabelTagHelper.For, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(1388, 51, true);
            WriteLiteral(":\r\n                                                ");
            EndContext();
            BeginContext(1440, 34, false);
#line 26 "C:\Users\andre\OneDrive\Escritorio\Trabajo Web\ComicsSolution\Comics.Site\Views\Revistas\Detalles.cshtml"
                                           Write(Html.DisplayFor(model => model.Id));

#line default
#line hidden
            EndContext();
            BeginContext(1474, 172, true);
            WriteLiteral("\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                ");
            EndContext();
            BeginContext(1646, 54, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("label", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "8ec53bd4d7a1a9031cb8fd98e0a969108e2dbdf09589", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_LabelTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.LabelTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_LabelTagHelper);
#line 29 "C:\Users\andre\OneDrive\Escritorio\Trabajo Web\ComicsSolution\Comics.Site\Views\Revistas\Detalles.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_LabelTagHelper.For = ModelExpressionProvider.CreateModelExpression(ViewData, __model => __model.Nombre);

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-for", __Microsoft_AspNetCore_Mvc_TagHelpers_LabelTagHelper.For, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(1700, 51, true);
            WriteLiteral(":\r\n                                                ");
            EndContext();
            BeginContext(1752, 38, false);
#line 30 "C:\Users\andre\OneDrive\Escritorio\Trabajo Web\ComicsSolution\Comics.Site\Views\Revistas\Detalles.cshtml"
                                           Write(Html.DisplayFor(model => model.Nombre));

#line default
#line hidden
            EndContext();
            BeginContext(1790, 172, true);
            WriteLiteral("\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                ");
            EndContext();
            BeginContext(1962, 51, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("label", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "8ec53bd4d7a1a9031cb8fd98e0a969108e2dbdf011876", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_LabelTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.LabelTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_LabelTagHelper);
#line 33 "C:\Users\andre\OneDrive\Escritorio\Trabajo Web\ComicsSolution\Comics.Site\Views\Revistas\Detalles.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_LabelTagHelper.For = ModelExpressionProvider.CreateModelExpression(ViewData, __model => __model.Año);

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-for", __Microsoft_AspNetCore_Mvc_TagHelpers_LabelTagHelper.For, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2013, 51, true);
            WriteLiteral(":\r\n                                                ");
            EndContext();
            BeginContext(2065, 35, false);
#line 34 "C:\Users\andre\OneDrive\Escritorio\Trabajo Web\ComicsSolution\Comics.Site\Views\Revistas\Detalles.cshtml"
                                           Write(Html.DisplayFor(model => model.Año));

#line default
#line hidden
            EndContext();
            BeginContext(2100, 172, true);
            WriteLiteral("\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                ");
            EndContext();
            BeginContext(2272, 61, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("label", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "8ec53bd4d7a1a9031cb8fd98e0a969108e2dbdf014158", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_LabelTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.LabelTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_LabelTagHelper);
#line 37 "C:\Users\andre\OneDrive\Escritorio\Trabajo Web\ComicsSolution\Comics.Site\Views\Revistas\Detalles.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_LabelTagHelper.For = ModelExpressionProvider.CreateModelExpression(ViewData, __model => __model.FechaRegistro);

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-for", __Microsoft_AspNetCore_Mvc_TagHelpers_LabelTagHelper.For, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2333, 51, true);
            WriteLiteral(":\r\n                                                ");
            EndContext();
            BeginContext(2385, 45, false);
#line 38 "C:\Users\andre\OneDrive\Escritorio\Trabajo Web\ComicsSolution\Comics.Site\Views\Revistas\Detalles.cshtml"
                                           Write(Html.DisplayFor(model => model.FechaRegistro));

#line default
#line hidden
            EndContext();
            BeginContext(2430, 172, true);
            WriteLiteral("\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                ");
            EndContext();
            BeginContext(2603, 40, false);
#line 41 "C:\Users\andre\OneDrive\Escritorio\Trabajo Web\ComicsSolution\Comics.Site\Views\Revistas\Detalles.cshtml"
                                           Write(Html.DisplayNameFor(model => model.Foto));

#line default
#line hidden
            EndContext();
            BeginContext(2643, 51, true);
            WriteLiteral(":\r\n                                                ");
            EndContext();
            BeginContext(2695, 36, false);
#line 42 "C:\Users\andre\OneDrive\Escritorio\Trabajo Web\ComicsSolution\Comics.Site\Views\Revistas\Detalles.cshtml"
                                           Write(Html.DisplayFor(model => model.Foto));

#line default
#line hidden
            EndContext();
            BeginContext(2731, 362, true);
            WriteLiteral(@"
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Comics.Domain.Entities.Comic> Html { get; private set; }
    }
}
#pragma warning restore 1591
