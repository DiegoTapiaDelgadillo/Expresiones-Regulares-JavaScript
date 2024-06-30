export default function RegularExpressionText({ regexText }) {
  const regexString = regexText;
  const escapedString = regexString
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/\//g, "&#47;")
    .replace(/\\/g, "&#92;");
  return (
    <p
      dangerouslySetInnerHTML={{ __html: escapedString }}
      className="pt-2 md:text-xl text-neutral-500 text-justify"
    ></p>
  );
}
