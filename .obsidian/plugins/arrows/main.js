/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ObsidianArrows
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
function _hasArrows(str) {
  return /I->/.test(str) || /<-I/.test(str) || /->I/g.test(str) || /I<-/g.test(str) || /-->/g.test(str) || /o>/g.test(str) || /<o/g.test(str) || /o->/g.test(str) || /~~>/g.test(str) || /<~~/g.test(str) || /L>/g.test(str) || /<L/g.test(str) || /->/g.test(str) || /<-/g.test(str) || /=>/g.test(str) || /<=/g.test(str) || /<>/g.test(str);
}
function _replaceArrows(str) {
  return str.replace(/I->/g, "\u21A6").replace(/<-I/g, "\u21A4").replace(/->I/g, "\u21E5").replace(/I<-/g, "\u21E4").replace(/-->/g, "\u21C9").replace(/o>/g, "\u21BA").replace(/<o/g, "\u21BB").replace(/o->/g, "\u21AC").replace(/~~>/g, "\u219D").replace(/<~~/g, "\u219C").replace(/L>/g, "\u21B3").replace(/<L/g, "\u21B2").replace(/->/g, "\u2192").replace(/<-/g, "\u2190").replace(/=>/g, "\u21D2").replace(/<=/g, "\u21D0").replace(/<>/g, "\u2194");
}
var ObsidianArrows = class extends import_obsidian.Plugin {
  _replaceArrowsInCurrentLine(editor) {
    const currentLineNumber = editor.getCursor().line;
    const currentLineContent = editor.getLine(currentLineNumber);
    if (_hasArrows(currentLineContent))
      editor.setLine(currentLineNumber, _replaceArrows(currentLineContent));
  }
  _replaceArrowsInCurrentFile(editor) {
    const content = editor.getValue();
    editor.setValue(_replaceArrows(content));
  }
  onload() {
    console.log("Loading Obsidian Arrows...");
    this.app.workspace.on("editor-change", this._replaceArrowsInCurrentLine);
    this.addCommand({
      id: "replace-all-arrows",
      name: "Replaces all arrows in the current file.",
      mobileOnly: false,
      editorCallback: this._replaceArrowsInCurrentFile
    });
    console.log("Loaded Obsidian Arrows.");
  }
  onunload() {
    console.log("Unloading Obsidian Arrows...");
    this.app.workspace.off("editor-change", this._replaceArrowsInCurrentLine);
    console.log("Unloaded Obsidian Arrows.");
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgRWRpdG9yLCBQbHVnaW4gfSBmcm9tICdvYnNpZGlhbic7XHJcblxyXG5mdW5jdGlvbiBfaGFzQXJyb3dzKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0cmV0dXJuIChcclxuXHRcdC9JLT4vLnRlc3Qoc3RyKSB8fFxyXG5cdFx0LzwtSS8udGVzdChzdHIpIHx8XHJcblx0XHQvLT5JL2cudGVzdChzdHIpIHx8XHJcblx0XHQvSTwtL2cudGVzdChzdHIpIHx8XHJcblx0XHQvLS0+L2cudGVzdChzdHIpIHx8XHJcblx0XHQvbz4vZy50ZXN0KHN0cikgfHxcclxuXHRcdC88by9nLnRlc3Qoc3RyKSB8fFxyXG5cdFx0L28tPi9nLnRlc3Qoc3RyKSB8fFxyXG5cdFx0L35+Pi9nLnRlc3Qoc3RyKSB8fFxyXG5cdFx0Lzx+fi9nLnRlc3Qoc3RyKSB8fFxyXG5cdFx0L0w+L2cudGVzdChzdHIpIHx8XHJcblx0XHQvPEwvZy50ZXN0KHN0cikgfHxcclxuXHRcdC8tPi9nLnRlc3Qoc3RyKSB8fFxyXG5cdFx0LzwtL2cudGVzdChzdHIpIHx8XHJcblx0XHQvPT4vZy50ZXN0KHN0cikgfHxcclxuXHRcdC88PS9nLnRlc3Qoc3RyKSB8fFxyXG5cdFx0Lzw+L2cudGVzdChzdHIpXHJcblx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3JlcGxhY2VBcnJvd3Moc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdHJldHVybiBzdHJcclxuXHRcdC5yZXBsYWNlKC9JLT4vZywgXCJcdTIxQTZcIilcclxuXHRcdC5yZXBsYWNlKC88LUkvZywgXCJcdTIxQTRcIilcclxuXHRcdC5yZXBsYWNlKC8tPkkvZywgXCJcdTIxRTVcIilcclxuXHRcdC5yZXBsYWNlKC9JPC0vZywgXCJcdTIxRTRcIilcclxuXHRcdC5yZXBsYWNlKC8tLT4vZywgXCJcdTIxQzlcIilcclxuXHRcdC5yZXBsYWNlKC9vPi9nLCBcIlx1MjFCQVwiKVxyXG5cdFx0LnJlcGxhY2UoLzxvL2csIFwiXHUyMUJCXCIpXHJcblx0XHQucmVwbGFjZSgvby0+L2csIFwiXHUyMUFDXCIpXHJcblx0XHQucmVwbGFjZSgvfn4+L2csIFwiXHUyMTlEXCIpXHJcblx0XHQucmVwbGFjZSgvPH5+L2csIFwiXHUyMTlDXCIpXHJcblx0XHQucmVwbGFjZSgvTD4vZywgXCJcdTIxQjNcIilcclxuXHRcdC5yZXBsYWNlKC88TC9nLCBcIlx1MjFCMlwiKVxyXG5cdFx0LnJlcGxhY2UoLy0+L2csIFwiXHUyMTkyXCIpXHJcblx0XHQucmVwbGFjZSgvPC0vZywgXCJcdTIxOTBcIilcclxuXHRcdC5yZXBsYWNlKC89Pi9nLCBcIlx1MjFEMlwiKVxyXG5cdFx0LnJlcGxhY2UoLzw9L2csIFwiXHUyMUQwXCIpXHJcblx0XHQucmVwbGFjZSgvPD4vZywgXCJcdTIxOTRcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic2lkaWFuQXJyb3dzIGV4dGVuZHMgUGx1Z2luIHtcclxuXHRwcml2YXRlIF9yZXBsYWNlQXJyb3dzSW5DdXJyZW50TGluZShlZGl0b3I6IEVkaXRvcik6IHZvaWQge1xyXG5cdFx0Y29uc3QgY3VycmVudExpbmVOdW1iZXIgPSBlZGl0b3IuZ2V0Q3Vyc29yKCkubGluZTtcclxuXHRcdGNvbnN0IGN1cnJlbnRMaW5lQ29udGVudCA9IGVkaXRvci5nZXRMaW5lKGN1cnJlbnRMaW5lTnVtYmVyKTtcclxuXHRcdC8vIE9ubHkgcnVuIGlmIHRoZXJlIGFyZSBhcnJvd3MgdG8gYmUgbW9kaWZpZWRcclxuXHRcdGlmIChfaGFzQXJyb3dzKGN1cnJlbnRMaW5lQ29udGVudCkpIGVkaXRvci5zZXRMaW5lKGN1cnJlbnRMaW5lTnVtYmVyLCBfcmVwbGFjZUFycm93cyhjdXJyZW50TGluZUNvbnRlbnQpKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX3JlcGxhY2VBcnJvd3NJbkN1cnJlbnRGaWxlKGVkaXRvcjogRWRpdG9yKTogdm9pZCB7XHJcblx0XHRjb25zdCBjb250ZW50ID0gZWRpdG9yLmdldFZhbHVlKCk7XHJcblx0XHRlZGl0b3Iuc2V0VmFsdWUoX3JlcGxhY2VBcnJvd3MoY29udGVudCkpO1xyXG5cdH1cclxuXHJcblx0b25sb2FkKCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCJMb2FkaW5nIE9ic2lkaWFuIEFycm93cy4uLlwiKTtcclxuXHRcdHRoaXMuYXBwLndvcmtzcGFjZS5vbihcImVkaXRvci1jaGFuZ2VcIiwgdGhpcy5fcmVwbGFjZUFycm93c0luQ3VycmVudExpbmUpO1xyXG5cclxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHRcdGlkOiBcInJlcGxhY2UtYWxsLWFycm93c1wiLFxyXG5cdFx0XHRuYW1lOiBcIlJlcGxhY2VzIGFsbCBhcnJvd3MgaW4gdGhlIGN1cnJlbnQgZmlsZS5cIixcclxuXHRcdFx0bW9iaWxlT25seTogZmFsc2UsXHJcblx0XHRcdGVkaXRvckNhbGxiYWNrOiB0aGlzLl9yZXBsYWNlQXJyb3dzSW5DdXJyZW50RmlsZVxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyhcIkxvYWRlZCBPYnNpZGlhbiBBcnJvd3MuXCIpO1xyXG5cdH1cclxuXHJcblx0b251bmxvYWQoKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIlVubG9hZGluZyBPYnNpZGlhbiBBcnJvd3MuLi5cIik7XHJcblx0XHR0aGlzLmFwcC53b3Jrc3BhY2Uub2ZmKFwiZWRpdG9yLWNoYW5nZVwiLCB0aGlzLl9yZXBsYWNlQXJyb3dzSW5DdXJyZW50TGluZSk7XHJcblx0XHRjb25zb2xlLmxvZyhcIlVubG9hZGVkIE9ic2lkaWFuIEFycm93cy5cIik7XHJcblx0fVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUErQjtBQUUvQixTQUFTLFdBQVcsS0FBc0I7QUFDekMsU0FDQyxNQUFNLEtBQUssR0FBRyxLQUNkLE1BQU0sS0FBSyxHQUFHLEtBQ2QsT0FBTyxLQUFLLEdBQUcsS0FDZixPQUFPLEtBQUssR0FBRyxLQUNmLE9BQU8sS0FBSyxHQUFHLEtBQ2YsTUFBTSxLQUFLLEdBQUcsS0FDZCxNQUFNLEtBQUssR0FBRyxLQUNkLE9BQU8sS0FBSyxHQUFHLEtBQ2YsT0FBTyxLQUFLLEdBQUcsS0FDZixPQUFPLEtBQUssR0FBRyxLQUNmLE1BQU0sS0FBSyxHQUFHLEtBQ2QsTUFBTSxLQUFLLEdBQUcsS0FDZCxNQUFNLEtBQUssR0FBRyxLQUNkLE1BQU0sS0FBSyxHQUFHLEtBQ2QsTUFBTSxLQUFLLEdBQUcsS0FDZCxNQUFNLEtBQUssR0FBRyxLQUNkLE1BQU0sS0FBSyxHQUFHO0FBRWhCO0FBRUEsU0FBUyxlQUFlLEtBQXFCO0FBQzVDLFNBQU8sSUFDTCxRQUFRLFFBQVEsUUFBRyxFQUNuQixRQUFRLFFBQVEsUUFBRyxFQUNuQixRQUFRLFFBQVEsUUFBRyxFQUNuQixRQUFRLFFBQVEsUUFBRyxFQUNuQixRQUFRLFFBQVEsUUFBRyxFQUNuQixRQUFRLE9BQU8sUUFBRyxFQUNsQixRQUFRLE9BQU8sUUFBRyxFQUNsQixRQUFRLFFBQVEsUUFBRyxFQUNuQixRQUFRLFFBQVEsUUFBRyxFQUNuQixRQUFRLFFBQVEsUUFBRyxFQUNuQixRQUFRLE9BQU8sUUFBRyxFQUNsQixRQUFRLE9BQU8sUUFBRyxFQUNsQixRQUFRLE9BQU8sUUFBRyxFQUNsQixRQUFRLE9BQU8sUUFBRyxFQUNsQixRQUFRLE9BQU8sUUFBRyxFQUNsQixRQUFRLE9BQU8sUUFBRyxFQUNsQixRQUFRLE9BQU8sUUFBRztBQUNyQjtBQUVBLElBQXFCLGlCQUFyQixjQUE0Qyx1QkFBTztBQUFBLEVBQzFDLDRCQUE0QixRQUFzQjtBQUN6RCxVQUFNLG9CQUFvQixPQUFPLFVBQVUsRUFBRTtBQUM3QyxVQUFNLHFCQUFxQixPQUFPLFFBQVEsaUJBQWlCO0FBRTNELFFBQUksV0FBVyxrQkFBa0I7QUFBRyxhQUFPLFFBQVEsbUJBQW1CLGVBQWUsa0JBQWtCLENBQUM7QUFBQSxFQUN6RztBQUFBLEVBRVEsNEJBQTRCLFFBQXNCO0FBQ3pELFVBQU0sVUFBVSxPQUFPLFNBQVM7QUFDaEMsV0FBTyxTQUFTLGVBQWUsT0FBTyxDQUFDO0FBQUEsRUFDeEM7QUFBQSxFQUVBLFNBQWU7QUFDZCxZQUFRLElBQUksNEJBQTRCO0FBQ3hDLFNBQUssSUFBSSxVQUFVLEdBQUcsaUJBQWlCLEtBQUssMkJBQTJCO0FBRXZFLFNBQUssV0FBVztBQUFBLE1BQ2YsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osZ0JBQWdCLEtBQUs7QUFBQSxJQUN0QixDQUFDO0FBQ0QsWUFBUSxJQUFJLHlCQUF5QjtBQUFBLEVBQ3RDO0FBQUEsRUFFQSxXQUFpQjtBQUNoQixZQUFRLElBQUksOEJBQThCO0FBQzFDLFNBQUssSUFBSSxVQUFVLElBQUksaUJBQWlCLEtBQUssMkJBQTJCO0FBQ3hFLFlBQVEsSUFBSSwyQkFBMkI7QUFBQSxFQUN4QztBQUNEOyIsCiAgIm5hbWVzIjogW10KfQo=
