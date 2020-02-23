package com.sdgp.backend.dto;

import com.sdgp.backend.constants.IConstants;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDTO<T> implements Serializable
{
	private boolean status;
	private String message;
	private T data;
	private IConstants.ResponseType responseType;

	public ResponseDTO( boolean status, String message )
	{
		this.status = status;
		this.message = message;
	}

	public ResponseDTO( boolean status, T data, IConstants.ResponseType responseType )
	{
		this.status = status;
		this.data = data;
		this.responseType = responseType;
	}


}
