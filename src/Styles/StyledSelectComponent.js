import styled from "styled-components";

const StyledSelectComponent = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1500px;
  .title_desc {
    /* border: 1px solid red; */

    h5 {
      font-size: 48px;
      margin-left: 1rem;
      font-weight: 500;
    }
    .face_text {
      display: flex;

      /* justify-content: center; */
      margin: 1rem;
      padding: 0 2rem;

      h6 {
        font-size: 28px;
        margin: 0 2rem;
        padding: 0.5rem 0.5rem;
      }
      .vl {
        border-left: 1px solid #c4c4c4;
        height: 50px;
      }
    }
    .face-image-grid {
      /* border: 1px solid red; */
      display: flex;
      flex-direction: column;
      .top {
        display: flex;
        justify-content: space-evenly;

        .top_face_image {
          .face_text {
            h5 {
              text-align: center;
            }
          }
        }
      }
    }
  }
  .image_modal {
    img {
      width: 100%;
      max-width: 500px;
    }
  }
`;
export default StyledSelectComponent;
