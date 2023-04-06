export default function FormHub() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
        <script>
          hbspt.forms.create({
            region: "na1",
            portalId: "7250954",
            formId: "4d64bb54-a612-40a8-87a7-7a72ce57fc63"
          });
        </script>`,
      }}
      className="flex flex-col"
    ></div>
  );
}
