import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

// TODO routing

app.innerHTML = `
  <h1>Viztrail</h1>
  <div>
    <label for="file">Choose file to upload</label>
    <input
      id="upload-input"
      type="file"
      accept=".gpx"
    />
  </div> 
`

document.querySelector<HTMLInputElement>('#upload-input')!.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  // TODO: progress bar and uploader
  const content = await file.text();
  console.log(content);

  // TODO: parse it's correct s3
  // TODO:
  // TODO: send to blackbaze
});
